package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "Empleado")
@Access(AccessType.FIELD)
@Data
public class Empleado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idEmpleado") // nombre real en la BD
    private Integer idEmpleado;

    @Column(name = "salario", nullable = false, precision = 10, scale = 2)
    private BigDecimal salario;

    @Column(name = "puesto", length = 50, nullable = false)
    private String puesto;

    @Column(name = "correoInstitucional", length = 50)
    private String correoInstitucional;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechaInicioEmpleado")
    private Date fechaInicioEmpleado;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechaFinEmpleado")
    private Date fechaFinEmpleado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idPersona", nullable = false)
    @JsonIgnoreProperties({"empleados", "clientes", "administradores"})
    private Persona persona;
}