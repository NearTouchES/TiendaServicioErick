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
}

resource "aws_apigatewayv2_integration" "clientes_proxy" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/clientes/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

# Integraciones para Empleados
resource "aws_apigatewayv2_integration" "empleados_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/empleados"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "empleados_proxy" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/empleados/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

# Integraciones para Servicios
resource "aws_apigatewayv2_integration" "servicios_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/servicios"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "servicios_proxy" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/servicios/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

# Integraciones para Solicitudes
resource "aws_apigatewayv2_integration" "solicitudes_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/solicitudes"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "solicitudes_proxy" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/solicitudes/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

# Stage
resource "aws_apigatewayv2_stage" "default_stage" {
  api_id      = aws_apigatewayv2_api.http_api.id
  name        = "$default"
  auto_deploy = true
}

# Rutas para Clientes
resource "aws_apigatewayv2_route" "clientes_get_all" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /clientes"
  target    = "integrations/${aws_apigatewayv2_integration.clientes_get_all.id}"
}

resource "aws_apigatewayv2_route" "clientes_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /clientes"
  target    = "integrations/${aws_apigatewayv2_integration.clientes_get_all.id}"
}

resource "aws_apigatewayv2_route" "clientes_get_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /clientes/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.clientes_proxy.id}"
}

resource "aws_apigatewayv2_route" "clientes_put_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PUT /clientes/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.clientes_proxy.id}"
}

resource "aws_apigatewayv2_route" "clientes_delete_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /clientes/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.clientes_proxy.id}"
}

# Rutas para Empleados
resource "aws_apigatewayv2_route" "empleados_get_all" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /empleados"
  target    = "integrations/${aws_apigatewayv2_integration.empleados_get_all.id}"
}

resource "aws_apigatewayv2_route" "empleados_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /empleados"
  target    = "integrations/${aws_apigatewayv2_integration.empleados_get_all.id}"
}

resource "aws_apigatewayv2_route" "empleados_get_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /empleados/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.empleados_proxy.id}"
}

resource "aws_apigatewayv2_route" "empleados_put_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PUT /empleados/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.empleados_proxy.id}"
}

resource "aws_apigatewayv2_route" "empleados_delete_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /empleados/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.empleados_proxy.id}"
}

# Rutas para Servicios
resource "aws_apigatewayv2_route" "servicios_get_all" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /servicios"
  target    = "integrations/${aws_apigatewayv2_integration.servicios_get_all.id}"
}

resource "aws_apigatewayv2_route" "servicios_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /servicios"
  target    = "integrations/${aws_apigatewayv2_integration.servicios_get_all.id}"
}

resource "aws_apigatewayv2_route" "servicios_get_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /servicios/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.servicios_proxy.id}"
}

resource "aws_apigatewayv2_route" "servicios_put_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PUT /servicios/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.servicios_proxy.id}"
}

resource "aws_apigatewayv2_route" "servicios_delete_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /servicios/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.servicios_proxy.id}"
}

# Rutas para Solicitudes
resource "aws_apigatewayv2_route" "solicitudes_get_all" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /solicitudes"
  target    = "integrations/${aws_apigatewayv2_integration.solicitudes_get_all.id}"
}

resource "aws_apigatewayv2_route" "solicitudes_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /solicitudes"
  target    = "integrations/${aws_apigatewayv2_integration.solicitudes_get_all.id}"
}

resource "aws_apigatewayv2_route" "solicitudes_get_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /solicitudes/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.solicitudes_proxy.id}"
}

resource "aws_apigatewayv2_route" "solicitudes_delete_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /solicitudes/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.solicitudes_proxy.id}"
}
