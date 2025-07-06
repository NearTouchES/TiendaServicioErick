package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "Cliente")
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ✅ Generar el ID automáticamente
    private Integer idCliente;

    @Column(length = 45, nullable = false)
    private String tipoCliente; // ✅ En Java se recomienda usar camelCase

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL) // ✅ Persistir Persona junto con Cliente
    @JoinColumn(name = "Persona_idPersona", nullable = false)
    private Persona persona;
}