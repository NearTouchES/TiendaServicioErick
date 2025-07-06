package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
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

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Persona_idPersona", nullable = false)
    private Persona persona;
}
