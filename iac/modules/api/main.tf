resource "aws_apigatewayv2_api" "http_api" {
  name          = "tienda-servicio-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    allow_headers = ["*"]
  }
}

resource "aws_apigatewayv2_integration" "administradores_integration_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/administradores"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "administradores_integration" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/administradores/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "clientes_integration_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/clientes"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "clientes_integration" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/clientes/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "servicios_integration_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/servicios"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "servicios_integration" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/servicios/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "ventas_integration_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/ventas"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "ventas_integration" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/ventas/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "empleados_integration_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/empleados"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "empleados_integration" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/empleados/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "itemventas_integration_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/itemventas"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "itemventas_integration" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/itemventas/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "personas_integration_get_all" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/personas"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}

resource "aws_apigatewayv2_integration" "personas_integration" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "HTTP_PROXY"
  integration_uri        = "http://${var.load_balancer_url}/api/personas/{proxy}"
  integration_method     = "ANY"
  payload_format_version = "1.0"
}
#########################################
resource "aws_apigatewayv2_integration" "eventbridge_integration" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "AWS_PROXY"
  integration_subtype    = "EventBridge-PutEvents"
  credentials_arn        = var.rol_lab_arn

  request_parameters = {
    Source       = "pe.com.tiendaServicio"
    DetailType   = "crear-orden"
    Detail       = "$request.body"
    EventBusName = var.event_bus_name
  }

  payload_format_version = "1.0"
  timeout_milliseconds   = 10000
}

resource "aws_apigatewayv2_stage" "default_stage" {
  api_id      = aws_apigatewayv2_api.http_api.id
  name        = "$default"
  auto_deploy = true

  default_route_settings {
    throttling_burst_limit = 500
    throttling_rate_limit  = 1000
  }

  route_settings {
    route_key     = "$default"
    logging_level = "INFO"
  }
}

#########################################
# Routes - administradores
#########################################
resource "aws_apigatewayv2_route" "administradores_get" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /administradores"
  target    = "integrations/${aws_apigatewayv2_integration.administradores_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "administradores_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /administradores"
  target    = "integrations/${aws_apigatewayv2_integration.administradores_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "administradores_get_by_id" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /administradores/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.administradores_integration.id}"
}

resource "aws_apigatewayv2_route" "administradores_put" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PUT /administradores/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.administradores_integration.id}"
}

resource "aws_apigatewayv2_route" "administradores_delete" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /administradores/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.administradores_integration.id}"
}
#########################################
# Routes - Clientes
#########################################
resource "aws_apigatewayv2_route" "clientes_get_all" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /clientes"
  target    = "integrations/${aws_apigatewayv2_integration.clientes_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "clientes_get_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /clientes/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.clientes_integration.id}"
}

resource "aws_apigatewayv2_route" "clientes_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /clientes"
  target    = "integrations/${aws_apigatewayv2_integration.clientes_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "clientes_put_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PUT /clientes/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.clientes_integration.id}"
}

resource "aws_apigatewayv2_route" "clientes_delete_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /clientes/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.clientes_integration.id}"
}

#########################################
# Routes - servicios
#########################################

resource "aws_apigatewayv2_route" "servicios_get_all" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /servicios"
  target    = "integrations/${aws_apigatewayv2_integration.servicios_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "servicios_get_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /servicios/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.servicios_integration.id}"
}

resource "aws_apigatewayv2_route" "servicios_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /servicio"
  target    = "integrations/${aws_apigatewayv2_integration.servicios_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "servicios_put_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PUT /servicios/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.servicios_integration.id}"
}

resource "aws_apigatewayv2_route" "servicios_delete_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /servicios/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.servicios_integration.id}"
}

#########################################
# Routes - Ventas
#########################################
resource "aws_apigatewayv2_route" "ventas_get_all" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /ventas"
  target    = "integrations/${aws_apigatewayv2_integration.ventas_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "ventas_get_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /ventas/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.ventas_integration.id}"
}

resource "aws_apigatewayv2_route" "ventas_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /ventas"
  target    = "integrations/${aws_apigatewayv2_integration.ventas_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "ventas_put_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PUT /ventas/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.ventas_integration.id}"
}

resource "aws_apigatewayv2_route" "ventas_delete_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /ventas/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.ventas_integration.id}"
}
#########################################
# Routes - empleados
#########################################
resource "aws_apigatewayv2_route" "empleados_get_all" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /empleados"
  target    = "integrations/${aws_apigatewayv2_integration.empleados_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "empleados_get_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /empleados/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.empleados_integration.id}"
}

resource "aws_apigatewayv2_route" "empleados_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /empleados"
  target    = "integrations/${aws_apigatewayv2_integration.empleados_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "empleados_put_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PUT /empleados/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.empleados_integration.id}"
}

resource "aws_apigatewayv2_route" "empleados_delete_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /empleados/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.empleados_integration.id}"
}
#########################################
# Routes - itemventas
#########################################
resource "aws_apigatewayv2_route" "itemventas_get_all" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /itemventas"
  target    = "integrations/${aws_apigatewayv2_integration.itemventas_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "itemventas_get_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /itemventas/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.itemventas_integration.id}"
}

resource "aws_apigatewayv2_route" "itemventas_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /itemventas"
  target    = "integrations/${aws_apigatewayv2_integration.itemventas_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "itemventas_put_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PUT /itemventas/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.itemventas_integration.id}"
}

resource "aws_apigatewayv2_route" "itemventas_delete_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /itemventas/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.itemventas_integration.id}"
}

#########################################
# Routes - personas
#########################################
resource "aws_apigatewayv2_route" "personas_get_all" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /personas"
  target    = "integrations/${aws_apigatewayv2_integration.personas_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "personas_get_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /personas/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.personas_integration.id}"
}

resource "aws_apigatewayv2_route" "personas_post" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /personas"
  target    = "integrations/${aws_apigatewayv2_integration.personas_integration_get_all.id}"
}

resource "aws_apigatewayv2_route" "personas_put_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PUT /personas/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.personas_integration.id}"
}

resource "aws_apigatewayv2_route" "personas_delete_proxy" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /personas/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.personas_integration.id}"
}