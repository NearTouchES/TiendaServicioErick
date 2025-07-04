package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Ventas")
@Data
public class Ventas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idVenta;

    @Column(length = 45)
    private String idCliente;

    @Column(length = 45)
    private String idItemVenta;

    @Column(length = 45)
    private String idEmpleado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Empleado_idEmpleado", nullable = false)
    private Empleado empleado;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Cliente_idCliente", nullable = false)
    private Cliente cliente;
}
