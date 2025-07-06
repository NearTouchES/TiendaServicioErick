package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Cliente")
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCliente;

    private String tipoCliente;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Persona_idPersona", nullable = false)
    private Persona persona;
}
