package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "ItemVenta")
@Access(AccessType.FIELD)
@Data
public class ItemVenta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idItemVenta") // nombre real en la base de datos
    private Integer idItemVenta;

    @Temporal(TemporalType.DATE)
    @Column(name = "fechaInicio", nullable = false)
    private Date fechaInicio;

    @Temporal(TemporalType.DATE)
    @Column(name = "fechaFin")
    private Date fechaFin;

    @Column(name = "subtotal", nullable = false, precision = 10, scale = 2)
    private BigDecimal subtotal;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idVenta", referencedColumnName = "idVenta", nullable = false)
    @JsonBackReference("venta-items")
    private Venta venta;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idServicio", referencedColumnName = "idServicio", nullable = false)
    private Servicio servicio;
}
