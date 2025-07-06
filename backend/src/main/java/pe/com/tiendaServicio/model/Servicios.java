package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name = "Servicio")
@Data
public class Servicios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idServicio;

    @Column(length = 45, nullable = false)
    private String nombreServicio;

    @Column(length = 100)
    private String descripcion;

    @Column(precision = 10, scale = 2, nullable = false)
    private BigDecimal costoServicio;
}