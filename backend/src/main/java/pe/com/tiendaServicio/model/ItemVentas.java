package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.Data;
// comentario
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "ItemVentas")
@Data
public class ItemVentas {

    @Id
    private Integer idItemVentas;

    private String idServicio;
    private String fechaInicio;
    private String fechaFin;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Ventas_idVenta", nullable = false)
    private Ventas ventas;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Servicios_idServicio", nullable = false)
    private Servicios servicios;
}
