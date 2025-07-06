package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "ItemVenta")
@Data
public class ItemVentas {

    @Id
    private Integer idItemVentas;

    @Column(length = 45, nullable = false)
    private String idServicio;

    @Column(length = 45, nullable = false)
    private String FechaInicio;

    @Column(length = 45)
    private String FechaFin;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Ventas_idVenta", nullable = false)
    private Ventas ventas;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Servicios_idServicio", nullable = false)
    private Servicios servicios;
}
