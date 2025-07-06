package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Cliente")
@Access(AccessType.FIELD)
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id") // <-- nombre real en la BD
    private Integer idCliente;

    @Column(name = "tipo_cliente", length = 45, nullable = false) // <-- nombre real en la BD
    private String tipoCliente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_persona", nullable = false) // <-- nombre real en la BD
    @JsonIgnoreProperties({"clientes", "empleados", "administradores"}) // rompe ciclos
    private Persona persona;
}