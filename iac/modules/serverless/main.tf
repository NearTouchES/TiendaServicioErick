data "archive_file" "archivo_crear_orden_lambda" {
  type        = "zip"
  source_dir  = "${path.root}/../serverless/tiendaServicio/packages/funciones/crear-orden/build"
  output_path = "${path.root}/data/crear_orden_lambda.zip"
}

resource "aws_lambda_function" "crear_orden" {
  function_name    = "crear-orden"
  handler          = "index.handler"  # Asegúrate que index.js tenga `exports.handler = ...`
  runtime          = var.entorno_ejecucion  # Ej: "nodejs18.x"
  role             = var.rol_lambda_arn

  filename         = data.archive_file.archivo_crear_orden_lambda.output_path
  source_code_hash = filebase64sha256(data.archive_file.archivo_crear_orden_lambda.output_path)

  timeout          = 60
  memory_size      = 512

  environment {
    variables = {
      URL_BASE_SERVICIO = var.url_base_servicio
    }
  }
}