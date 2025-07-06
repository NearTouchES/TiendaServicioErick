package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "Empleado")
@Data
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEmpleado;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal salario;

    @Column(length = 50, nullable = false)
    private String puesto;

    @Column(length = 50)
    private String correoInstitucional;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechaInicioEmpleado")
    private Date fechaInicioEmpleado;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechaFinEmpleado")
    private Date fechaFinEmpleado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Persona_idPersona", nullable = false)
    private Persona persona;
}