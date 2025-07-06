package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "Servicios")
@Data
public class Servicios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idServicio;

    @Column(length = 45)
    private String Descripcion;

    @Column(name = "NombreServicio", length = 45)
    private String NombreServicio;

    @Column(length = 45)
    private String CostoServicio;
}
