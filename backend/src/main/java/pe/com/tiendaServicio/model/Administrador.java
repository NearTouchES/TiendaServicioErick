package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "Administrador") // ✅ tabla en singular
@Data
public class Administrador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAdministrador;

    @Column(nullable = false)
    private Double salario;

    @Column(length = 45, nullable = false)
    private String correoInstitucional;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "Persona_idPersona", nullable = false) // ✅ relación en singular
    private Persona persona;
}