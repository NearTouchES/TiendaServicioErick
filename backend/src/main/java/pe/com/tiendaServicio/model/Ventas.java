package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Venta")
@Data
public class Ventas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idVenta;

    private String idCliente;
    private String idItemVenta;
    private String idEmpleado;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Empleado_idEmpleado", nullable = false)
    private Empleado empleado;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Cliente_idCliente", nullable = false)
    private Cliente cliente;
}
