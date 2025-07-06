package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "Empleado")
@Data
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEmpleado;

    @Column(nullable = false)
    private Double Salario;

    @Column(length = 50, nullable = false)
    private String Puesto;

    @Column(length = 50)
    private String CorreoInstitucional;

    @Temporal(TemporalType.TIMESTAMP)
    private Date FechaInicioEmpleado;

    @Temporal(TemporalType.TIMESTAMP)
    private Date FechaFinEmpleado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Persona_idPersona", nullable = false)
    private Persona persona;
}
