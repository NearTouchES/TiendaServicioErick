-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema base13
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema base13
-- -----------------------------------------------------
-- CREATE SCHEMA IF NOT EXISTS `base13` DEFAULT CHARACTER SET utf8 ;
-- Basic tables
USE `base13` ;

-- -----------------------------------------------------
-- Table `base13`.`Persona`
-- -----------------------------------------------------
CREATE TABLE Persona (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dni CHAR(10) NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    celular CHAR(9),
    correo_personal VARCHAR(50) NOT NULL,
    nacionalidad VARCHAR(50)
);

-- -----------------------------------------------------
-- Table `base13`.`Empleado`
-- -----------------------------------------------------
CREATE TABLE Empleado (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    salario DECIMAL(10, 2) NOT NULL,
    puesto VARCHAR(50) NOT NULL,
    correo_institucional VARCHAR(50),
    fecha_inicio DATETIME,
    fecha_fin DATETIME,
    id_persona INT NOT NULL
);

ALTER TABLE Empleado
    ADD CONSTRAINT FK_Empleado_Persona
    FOREIGN KEY (id_persona) REFERENCES Persona(id);


-- -----------------------------------------------------
-- Table `base13`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE Cliente (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo_cliente VARCHAR(45) NOT NULL,
    id_persona INT NOT NULL
);

ALTER TABLE Cliente
    ADD CONSTRAINT FK_Cliente_Persona
    FOREIGN KEY (id_persona) REFERENCES Persona(id);

-- -----------------------------------------------------
-- Table `base13`.`Administrador`
-- -----------------------------------------------------
CREATE TABLE Administrador (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    salario DECIMAL(10, 2) NOT NULL,
    correo_institucional VARCHAR(50) NOT NULL,
    id_persona INT NOT NULL
);

ALTER TABLE Administrador
    ADD CONSTRAINT FK_Administrador_Persona
    FOREIGN KEY (id_persona) REFERENCES Persona(id);

-- -----------------------------------------------------
-- Table `base13`.`Ventas`
-- -----------------------------------------------------
CREATE TABLE Venta (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_empleado INT NOT NULL,
    fecha DATETIME NOT NULL
);

ALTER TABLE Venta
    ADD CONSTRAINT FK_Venta_Cliente
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id);

ALTER TABLE Venta
    ADD CONSTRAINT FK_Venta_Empleado
    FOREIGN KEY (id_empleado) REFERENCES Empleado(id);

-- -----------------------------------------------------
-- Table `base13`.`Servicio`
-- -----------------------------------------------------
CREATE TABLE Servicio (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45),
    descripcion VARCHAR(100),
    costo DECIMAL(10, 2)
);


-- -----------------------------------------------------
-- Table `base13`.`ItemVentas`
-- -----------------------------------------------------
CREATE TABLE ItemVenta (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_venta INT NOT NULL,
    id_servicio INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    subtotal DECIMAL(10, 2) NOT NULL
);

ALTER TABLE ItemVenta
    ADD CONSTRAINT FK_ItemVenta_Venta
    FOREIGN KEY (id_venta) REFERENCES Venta(id);

ALTER TABLE ItemVenta
    ADD CONSTRAINT FK_ItemVenta_Servicio
    FOREIGN KEY (id_servicio) REFERENCES Servicio(id);

-- SET SQL_MODE=@OLD_SQL_MODE;
-- SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
-- SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
