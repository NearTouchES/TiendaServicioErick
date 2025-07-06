package pe.com.tiendaServicio.model;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "Servicio") // ✅ Tabla en singular
@Data
public class Servicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idServicio;

    @Column(length = 45)
    private String descripcion;

    @Column(name = "nombreServicio", length = 45)
    private String nombreServicio;

    @Column(length = 45)
    private BigDecimal costoServicio;
}
