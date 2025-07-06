package pe.com.tiendaServicio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "Persona")
@Data
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id") // nombre real en la base de datos
    private Integer idPersona;

    @Column(name = "dni", length = 10, nullable = false)
    private String dni;

    @Column(name = "nombres", length = 50, nullable = false)
    private String nombres;

    @Column(name = "apellidos", length = 50, nullable = false)
    private String apellidos;

    @Column(name = "celular", length = 9)
    private String celular;

    @Column(name = "correo_personal", length = 50, nullable = false)
    private String correoPersonal;

    @Column(name = "nacionalidad", length = 50)
    private String nacionalidad;

    // Relaciones con otras entidades

    @OneToMany(mappedBy = "persona", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Empleado> empleados;

    @OneToMany(mappedBy = "persona", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Administrador> administradores;

    @OneToMany(mappedBy = "persona", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Cliente> clientes;
}