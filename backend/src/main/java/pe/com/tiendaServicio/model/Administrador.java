package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Administrador")
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "empleados", "clientes", "administradores"})
public class Administrador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAdministrador")
    private Integer idAdministrador;

    @Column(name = "salario", nullable = false)
    private Double salario;

    @Column(name = "correoInstitucional", nullable = false, length = 45)
    private String correoInstitucional;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idPersona", nullable = false)
    private Persona persona;
}
