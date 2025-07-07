DROP DATABASE IF EXISTS base13;
CREATE DATABASE base13;
-- Usa la nueva base de datos
USE base13;

CREATE TABLE cliente (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL UNIQUE,
  telefono VARCHAR(255) NOT NULL
);

CREATE TABLE empleado (
  id_empleado INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  correo_institucional VARCHAR(255) NOT NULL UNIQUE,
  puesto VARCHAR(255) NOT NULL,
  salario DOUBLE PRECISION CHECK (salario > 0),
  fecha_inicio_empleado DATETIME,
  fecha_fin_empleado DATETIME
);

CREATE TABLE servicio (
  id_servicio INT AUTO_INCREMENT PRIMARY KEY,
  nombre_servicio VARCHAR(100) NOT NULL,
  descripcion VARCHAR(500),
  costo_servicio DECIMAL(10, 2) NOT NULL CHECK (costo_servicio >= 0),
  especialidad VARCHAR(100),
  duracion INT,
  modalidad VARCHAR(20)
);

CREATE TABLE solicitud_servicio (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  servicio_id INT NOT NULL,
  fecha_solicitud DATETIME,
  estado VARCHAR(20),
  CONSTRAINT fk_cliente FOREIGN KEY (cliente_id) REFERENCES cliente(id_cliente) ON DELETE CASCADE,
  CONSTRAINT fk_servicio FOREIGN KEY (servicio_id) REFERENCES servicio(id_servicio) ON DELETE CASCADE
);
