INSERT INTO Persona (dni, nombres, apellidos, celular, correo_personal, nacionalidad) VALUES
('12345678', 'Lucía', 'Pérez Soto', '987654321', 'lucia@gmail.com', 'Peruana'),
('23456789', 'Andrés', 'Mendoza Quispe', '998877665', 'andres@hotmail.com', 'Peruano'),
('34567890', 'María', 'Zapata López', '912345678', 'mariaz@outlook.com', 'Peruana'),
('45678901', 'Carlos', 'Lozano Ríos', '987111222', 'carlos.l@correo.com', 'Peruano');

INSERT INTO Cliente (tipo_cliente, id_persona) VALUES
('Frecuente', 1),
('Nuevo', 2);

INSERT INTO Empleado (salario, puesto, correo_institucional, fecha_inicio, fecha_fin, id_persona) VALUES
(1800.00, 'Técnico de mantenimiento', 'lucia@empresa.com', '2023-01-10', NULL, 3),
(2200.00, 'Asesor de servicios', 'carlos@empresa.com', '2022-06-15', NULL, 4);

INSERT INTO Servicio (nombre, descripcion, costo) VALUES
('Mantenimiento PC', 'Revisión y limpieza de hardware/software', 120.00),
('Instalación de software', 'Instalación y configuración de programas', 80.00),
('Soporte remoto', 'Asistencia técnica por videollamada', 50.00),
('Reparación hardware', 'Cambio de partes dañadas', 200.00);

INSERT INTO Venta (id_cliente, id_empleado, fecha) VALUES
(1, 1, '2024-07-01 10:00:00'),
(2, 2, '2024-07-02 15:30:00');

-- Venta 1 (Lucía recibió 2 servicios)
INSERT INTO ItemVenta (id_venta, id_servicio, fecha_inicio, fecha_fin, subtotal) VALUES
(1, 1, '2024-07-01', '2024-07-01', 120.00),
(1, 2, '2024-07-01', '2024-07-01', 80.00);

-- Venta 2 (Andrés contrató soporte remoto)
INSERT INTO ItemVenta (id_venta, id_servicio, fecha_inicio, fecha_fin, subtotal) VALUES
(2, 3, '2024-07-02', '2024-07-02', 50.00);

