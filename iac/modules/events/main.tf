resource "aws_cloudwatch_event_bus" "ordenes_bus" {
    name = "ordenes-bus-servicio2"
}

resource "aws_cloudwatch_event_rule" "crear_orden" {
    name           = "crear-orden2"
    description    = "Regla para crear orden desde evento personalizado"
    event_bus_name = aws_cloudwatch_event_bus.ordenes_bus.name
    event_pattern = jsonencode({
        source       = ["pe.com.tiendaServicio"],
        "detail-type": ["crear-orden2"]
    })
}

resource "aws_cloudwatch_event_target" "target_lambda_crear_orden" {
    rule      = aws_cloudwatch_event_rule.crear_orden.name
    target_id = "crear-orden2-lambda"
    arn       = var.crear_orden_funcion_arn
    event_bus_name = aws_cloudwatch_event_bus.ordenes_bus.name
}

resource "aws_lambda_permission" "allow_eventbridge" {
    statement_id  = "AllowExecutionFromEventBridge"
    action        = "lambda:InvokeFunction"
    function_name = var.crear_orden_funcion_name
    principal     = "events.amazonaws.com"
    source_arn    = aws_cloudwatch_event_rule.crear_orden.arn
}