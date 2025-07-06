package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "ItemVenta")
@Data
public class ItemVentas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idItemVentas;

    @Temporal(TemporalType.DATE)
    @Column(name = "fechaInicio", nullable = false)
    private Date fechaInicio;

    @Temporal(TemporalType.DATE)
    @Column(name = "fechaFin")
    private Date fechaFin;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Ventas_idVenta", nullable = false)
    @JsonBackReference("venta-items")
    private Ventas ventas;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Servicios_idServicio", nullable = false)
    private Servicios servicios;
}
