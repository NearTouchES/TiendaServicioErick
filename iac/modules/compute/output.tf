output "nombre_cluster" {
  value = aws_ecs_cluster.cluster_tienda_servicio.name
}

output "task_definition_arn" {
  value = aws_ecs_task_definition.definicion_tarea_tienda_servicio.arn
}

output "load_balancer_url" {
  value = aws_lb.tienda_servicio_load_balancer.dns_name
}
