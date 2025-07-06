package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name = "Servicio")
@Access(AccessType.FIELD)
@Data
public class Servicios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer idServicio;

    @Column(name = "nombre", length = 45, nullable = false)
    private String nombreServicio;

    @Column(name = "descripcion", length = 100)
    private String descripcion;

    @Column(name = "costo", precision = 10, scale = 2, nullable = false)
    private BigDecimal costoServicio;
}
