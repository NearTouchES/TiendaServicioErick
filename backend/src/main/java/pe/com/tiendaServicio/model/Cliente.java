package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Cliente")
@Data
public class Cliente {

    @Id
    private Integer idCliente;

    @Column(length = 45, nullable = false)
    private String TipoCliente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Persona_idPersona", nullable = false)
    private Persona persona;
}
