package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "Empleado")
@Data
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEmpleado;

    private Double salario;
    private String puesto;
    private String correoInstitucional;
    private LocalDateTime fechaInicioEmpleado;
    private LocalDateTime fechaFinEmpleado;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Persona_idPersona", nullable = false)
    private Persona persona;
}
