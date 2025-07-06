package pe.com.tiendaServicio.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "Persona")
@Data
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPersona;

    @Column(name = "dni", length = 10, nullable = false)
    private String dni;

    @Column(name = "nombres", length = 50, nullable = false)
    private String nombres;

    @Column(name = "apellidos", length = 50, nullable = false)
    private String apellidos;

    @Column(name = "celular", length = 9)
    private String celular;

    @Column(name = "correoPersonal", length = 50, nullable = false)
    private String correoPersonal;

    @Column(name = "nacionalidad", length = 50)
    private String nacionalidad;
}
