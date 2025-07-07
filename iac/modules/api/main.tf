resource "aws_apigatewayv2_api" "http_api" {
  name          = "tienda-servicio-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    allow_headers = ["*"]
  }
}

# Integraciones para Clientes
resource "aws_apigatewayv2_integration" "clientes_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/clientes"
  integration_method     = "ANY"
  payload_format_version = "1.0"

  depends_on = [
    aws_apigatewayv2_route.clientes_get_all,
    aws_apigatewayv2_route.clientes_post,
  ]
}

resource "aws_apigatewayv2_integration" "clientes_proxy" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/clientes/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"

  depends_on = [
    aws_apigatewayv2_route.clientes_get_proxy,
    aws_apigatewayv2_route.clientes_put_proxy,
    aws_apigatewayv2_route.clientes_delete_proxy,
  ]
}

# Integraciones para Empleados
resource "aws_apigatewayv2_integration" "empleados_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/empleados"
  integration_method     = "ANY"
  payload_format_version = "1.0"

  depends_on = [
    aws_apigatewayv2_route.empleados_get_all,
    aws_apigatewayv2_route.empleados_post,
  ]
}

resource "aws_apigatewayv2_integration" "empleados_proxy" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/empleados/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"

  depends_on = [
    aws_apigatewayv2_route.empleados_get_proxy,
    aws_apigatewayv2_route.empleados_put_proxy,
    aws_apigatewayv2_route.empleados_delete_proxy,
  ]
}

# Integraciones para Servicios
resource "aws_apigatewayv2_integration" "servicios_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/servicios"
  integration_method     = "ANY"
  payload_format_version = "1.0"

  depends_on = [
    aws_apigatewayv2_route.servicios_get_all,
    aws_apigatewayv2_route.servicios_post,
  ]
}

resource "aws_apigatewayv2_integration" "servicios_proxy" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/servicios/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"

  depends_on = [
    aws_apigatewayv2_route.servicios_get_proxy,
    aws_apigatewayv2_route.servicios_put_proxy,
    aws_apigatewayv2_route.servicios_delete_proxy,
  ]
}

# Integraciones para Solicitudes
resource "aws_apigatewayv2_integration" "solicitudes_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/solicitudes"
  integration_method     = "ANY"
  payload_format_version = "1.0"

  depends_on = [
    aws_apigatewayv2_route.solicitudes_get_all,
    aws_apigatewayv2_route.solicitudes_post,
  ]
}

resource "aws_apigatewayv2_integration" "solicitudes_proxy" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/solicitudes/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"

  depends_on = [
    aws_apigatewayv2_route.solicitudes_get_proxy,
    aws_apigatewayv2_route.solicitudes_delete_proxy,
  ]
}

# Stage
resource "aws_apigatewayv2_stage" "default_stage" {
  api_id      = aws_apigatewayv2_api.http_api.id
  name        = "$default"
  auto_deploy = true
} 
