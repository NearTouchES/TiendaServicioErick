package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Venta")
@Access(AccessType.FIELD)
@Data
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idVenta")
    private Integer idVenta;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fechaVenta", nullable = false)
    private Date fechaVenta;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idEmpleado", referencedColumnName = "idEmpleado", nullable = false)
    private Empleado empleado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idCliente", referencedColumnName = "idCliente", nullable = false)
    private Cliente cliente;

    @OneToMany(mappedBy = "venta", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonManagedReference("venta-items")
    private List<ItemVenta> items = new ArrayList<>();

    @Column(name = "subtotal", nullable = false)
    private double subtotal;

    @Column(name = "igv", nullable = false)
    private double igv;

    @Column(name = "total", nullable = false)
    private double total;
}