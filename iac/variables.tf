variable "region" {
  description = "Región en la que se desplegarán los recursos de AWS"
  type        = string
  default     = "us-east-1"
}

variable "id_cuenta_aws" {
  description = "ID de la cuenta de AWS donde se desplegarán los recursos"
  type        = string
}

variable "rol_lab_arn" {
  description = "ARN del rol de laboratorio (por ejemplo, AWS Academy)"
  type        = string
}

variable "url_base_servicio" {
  description = "URL base del servicio al que la función Lambda se conectará"
  type        = string
}

variable "nombre_cluster_ecs" {
  description = "Nombre del clúster ECS donde se desplegará la tarea"
  type        = string
}

variable "familia_tarea_ecs" {
  description = "Nombre de la familia de tareas ECS"
  type        = string
}

variable "nombre_repo_ecr" {
  description = "Nombre del repositorio ECR donde se almacenará la imagen del contenedor"
  type        = string
}

variable "servidor_base_datos" {
  description = "Dirección del servidor de la base de datos (RDS u otro)"
  type        = string
}

variable "usuario_base_datos" {
  description = "Usuario de la base de datos para la aplicación"
  type        = string
}

variable "contrasenha_base_datos" {
  description = "Contraseña del usuario de la base de datos para la aplicación"
  type        = string
  sensitive   = true
}

variable "nombre_servicio_ecs" {
  description = "Nombre del servicio ECS donde se desplegará la tarea"
  type        = string
}
