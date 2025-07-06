package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "ItemVenta") // ✅ Tabla en singular
@Data
public class ItemVenta {

    @Id
    private Integer idItemVenta; // ✅ Alineado con el nombre de la clase y tabla

    private String idServicio;
    private String fechaInicio;
    private String fechaFin;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Venta_idVenta", nullable = false) // ✅ Singular
    private Venta venta;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Servicio_idServicio", nullable = false)
    private Servicio servicio;
;
}
