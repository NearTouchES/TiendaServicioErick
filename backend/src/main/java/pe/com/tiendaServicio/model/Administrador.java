package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Entity
@Table(name = "Administrador")
@Access(AccessType.FIELD)
@Data
public class Administrador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAdministrador") // nombre real en la BD
    private Integer idAdministrador;

    @Column(name = "salario", nullable = false, precision = 10, scale = 2)
    private BigDecimal salario;

    @Column(name = "correoInstitucional", length = 50, nullable = false)
    private String correoInstitucional;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idPersona", nullable = false)
    @JsonIgnoreProperties({"empleados", "clientes", "administradores"})
    private Persona persona;
}