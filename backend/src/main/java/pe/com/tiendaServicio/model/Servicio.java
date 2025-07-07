package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name = "servicio")
@Data
public class Servicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idServicio;

    @NotBlank
    @Column(length = 100)
    private String nombreServicio;

    @Column(length = 500)
    private String descripcion;

    @NotNull
    @DecimalMin("0.0")
    @Column(precision = 10, scale = 2)
    private BigDecimal costoServicio;

    @Column(length = 100)
    private String especialidad;

    private Integer duracion; // minutos

    @Column(length = 20)
    private String modalidad; // "Presencial", "Virtual", "Mixto"
}
