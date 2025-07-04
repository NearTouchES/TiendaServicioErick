package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "ItemVentas")
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Ventas_idVenta", nullable = false)
    private Ventas ventas;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Servicios_idServicio", nullable = false)
    private Servicios servicios;
}
