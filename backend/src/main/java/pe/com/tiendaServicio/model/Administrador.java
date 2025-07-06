package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name = "Administrador")
@Data
public class Administrador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAdministrador;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal salario;

    @Column(length = 45, nullable = false)
    private String correoInstitucional;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Persona_idPersona", nullable = false)
    private Persona persona;
}
