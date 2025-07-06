package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Venta")
@Data
public class Ventas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idVenta;

    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaVenta;

    @Column(nullable = false)
    private double subtotal;

    @Column(nullable = false)
    private double igv;

    @Column(nullable = false)
    private double total;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Empleado_idEmpleado", nullable = false)
    private Empleado empleado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Cliente_idCliente", nullable = false)
    private Cliente cliente;

    @OneToMany(mappedBy = "ventas", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonManagedReference("venta-items")
    private List<ItemVentas> items = new ArrayList<>();
}
