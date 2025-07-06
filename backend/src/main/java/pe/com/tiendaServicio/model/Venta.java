package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "Venta") // ✅ tabla en singular
@Data
public class Venta { // ✅ clase en singular

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
