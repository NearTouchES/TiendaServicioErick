package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "empleado")
@Data
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEmpleado;

    @NotBlank
    private String nombre;

    @NotBlank
    private String apellido;

    @Email
    @NotBlank
    @Column(unique = true)
    private String correoInstitucional;

    @NotBlank
    private String puesto;

    @Positive
    private Double salario;

    private LocalDateTime fechaInicioEmpleado;
    private LocalDateTime fechaFinEmpleado;
}
