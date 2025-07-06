# ECS Cluster
resource "aws_ecs_cluster" "cluster_tiendaservicio" {
  name = var.nombre_cluster
}

# Log Group
resource "aws_cloudwatch_log_group" "ecs_logs" {
  name              = "/ecs/${var.nombre_servicio_ecs}"
  retention_in_days = 7

  lifecycle {
    prevent_destroy = false
    ignore_changes  = [name]
  }
}

# Definición de Tarea para tiendaservicio
resource "aws_ecs_task_definition" "definicion_tarea_tiendaservicio" {
  family                   = var.familia_tarea
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "1024"
  memory                   = "3072"
  execution_role_arn       = var.rol_lab_arn
  task_role_arn            = var.rol_lab_arn

  container_definitions = jsonencode([{
    name      = var.nombre_repo_ecr
    image     = "${var.id_cuenta_aws}.dkr.ecr.${var.region_aws}.amazonaws.com/${var.nombre_repo_ecr}:latest"
    essential = true
    portMappings = [{
      containerPort = 8080
      protocol      = "tcp"
    }]
    cpu               = 1024
    memory            = 3072
    memoryReservation = 1024
    environment = [
      {
        name  = "SPRING_DATASOURCE_URL"
        value = var.servidor_base_datos
      },
      {
        name  = "SPRING_DATASOURCE_USERNAME"
        value = var.usuario_base_datos
      },
      {
        name  = "SPRING_DATASOURCE_PASSWORD"
        value = var.contrasenha_base_datos
      }
    ]
    logConfiguration = {
      logDriver = "awslogs"
      options = {
        awslogs-group         = "/ecs/${var.nombre_servicio_ecs}"
        awslogs-region        = var.region_aws
        awslogs-stream-prefix = "ecs"
      }
    }
  }])
}

# Networking
data "aws_vpc" "vpc_por_defecto" {
  default = true
}

data "aws_subnets" "sub_redes_por_defecto" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.vpc_por_defecto.id]
  }
}

data "aws_security_group" "grupo_seguridad_por_defecto" {
  name   = "default"
  vpc_id = data.aws_vpc.vpc_por_defecto.id
}

# Load Balancer
resource "aws_lb" "tiendaservicio_load_balancer" {
  name               = "tiendaservicio-alb"
  internal           = false
  load_balancer_type = "application"
  subnets            = data.aws_subnets.sub_redes_por_defecto.ids
  security_groups    = [data.aws_security_group.grupo_seguridad_por_defecto.id]
}

resource "aws_lb_target_group" "tg_tiendaservicio" {
  name        = "tg-tiendaservicio"
  port        = 8080
  protocol    = "HTTP"
  vpc_id      = data.aws_vpc.vpc_por_defecto.id
  target_type = "ip"

  health_check {
    path                = "/"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
    matcher             = "200"
  }
}

resource "aws_lb_listener" "http_listener" {
  load_balancer_arn = aws_lb.tiendaservicio_load_balancer.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.tg_tiendaservicio.arn
  }
}

# Servicio ECS
resource "aws_ecs_service" "servicio_tiendaservicio" {
  name            = var.nombre_servicio_ecs
  cluster         = aws_ecs_cluster.cluster_tiendaservicio.id
  task_definition = aws_ecs_task_definition.definicion_tarea_tiendaservicio.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  load_balancer {
    target_group_arn = aws_lb_target_group.tg_tiendaservicio.arn
    container_name   = var.nombre_repo_ecr
    container_port   = 8080
  }

  network_configuration {
    subnets          = data.aws_subnets.sub_redes_por_defecto.ids
    security_groups  = [data.aws_security_group.grupo_seguridad_por_defecto.id]
    assign_public_ip = true
  }

  deployment_controller {
    type = "ECS"
  }

  depends_on = [
    aws_ecs_cluster.cluster_tiendaservicio,
    aws_ecs_task_definition.definicion_tarea_tiendaservicio,
    aws_lb_listener.http_listener
  ]
}


# Autoescalamiento
resource "aws_appautoscaling_target" "objetivo_escalamiento_tiendaservicio" {
  service_namespace  = "ecs"
  resource_id        = "service/${aws_ecs_cluster.cluster_tiendaservicio.name}/${aws_ecs_service.servicio_tiendaservicio.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  min_capacity       = 1
  max_capacity       = 4
}

resource "aws_appautoscaling_policy" "politica_autoescalamiento_tiendaservicio" {
  name               = "cpu-utilization-scaling"
  service_namespace  = "ecs"
  resource_id        = aws_appautoscaling_target.objetivo_escalamiento_tiendaservicio.resource_id
  scalable_dimension = aws_appautoscaling_target.objetivo_escalamiento_tiendaservicio.scalable_dimension
  policy_type        = "TargetTrackingScaling"

  target_tracking_scaling_policy_configuration {
    target_value = 75.0
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
    scale_in_cooldown  = 60
    scale_out_cooldown = 60
  }
}