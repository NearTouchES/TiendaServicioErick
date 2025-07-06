package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Persona")
@Data
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPersona;

    @Column(length = 10, nullable = false)
    private String DNI;

    @Column(length = 50, nullable = false)
    private String Nombres;

    @Column(length = 50, nullable = false)
    private String Apellidos;

    @Column(length = 9)
    private String Celular;

    @Column(length = 50, nullable = false)
    private String CorreoPersonal;

    @Column(length = 50)
    private String Nacionalidad;
}