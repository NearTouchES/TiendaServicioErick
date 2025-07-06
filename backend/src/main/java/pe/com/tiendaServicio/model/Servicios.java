package pe.com.tiendaServicio.model;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "Servicios")
@Data
public class Servicios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idServicio;

    @Column(length = 100)
    private String nombreServicio;

    @Column(length = 500)
    private String descripcion;

    @Column(precision = 10, scale = 2)
    private BigDecimal costoServicio;

    @Column(length = 100)
    private String especialidad;  // Nueva

    private Integer duracion;     // En minutos, nueva

    @Column(length = 20)
    private String modalidad;     // "Presencial", "Virtual", "Mixto"
}
