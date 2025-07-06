output "nombre_cluster" {
  value = aws_ecs_cluster.cluster_tiendaservicio.name
}

output "task_definition_arn" {
  value = aws_ecs_task_definition.definicion_tarea_tiendaservicio.arn
}

output "load_balancer_url" {
  value = aws_lb.tiendaservicio_load_balancer.dns_name
}
