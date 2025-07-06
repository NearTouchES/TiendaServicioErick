package pe.com.tiendaServicio.model;

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
    @Column(name = "id") // ¡En la BD es 'id'!
    private Integer idAdministrador;

    @Column(name = "salario", nullable = false, precision = 10, scale = 2)
    private BigDecimal salario;

    @Column(name = "correo_institucional", length = 50, nullable = false)
    private String correoInstitucional;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_persona", nullable = false) // este es el nombre real en la BD
    private Persona persona;
}