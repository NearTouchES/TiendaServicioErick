package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name = "Servicio")
@Access(AccessType.FIELD)
@Data
public class Servicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idServicio")
    private Integer idServicio;

    @Column(name = "nombreServicio", length = 45, nullable = false)
    private String nombreServicio;

    @Column(name = "descripcion", length = 100)
    private String descripcion;

    @Column(name = "costoServicio", precision = 10, scale = 2, nullable = false)
    private BigDecimal costoServicio;
}
