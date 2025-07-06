package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Servicio")
@Data
public class Servicios {

    @Id
    private Integer idServicio;

    @Column(length = 45)
    private String Descripcion;

    @Column(name = "NombreServicio", length = 45)
    private String NombreServicio;

    @Column(length = 45)
    private String CostoServicio;
}
