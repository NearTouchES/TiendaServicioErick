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
    private Integer idPersona;

    @Column(length = 10, nullable = false)
    private String dni;

    @Column(length = 50, nullable = false)
    private String nombres;

    @Column(length = 50, nullable = false)
    private String apellidos;

    @Column(length = 9)
    private String celular;

    @Column(length = 50, nullable = false)
    private String correoPersonal;

    @Column(length = 50)
    private String nacionalidad;

    // Relaciones con otras entidades

    @OneToMany(mappedBy = "persona", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Empleado> empleados;

    @OneToMany(mappedBy = "persona", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Administrador> administradores;

    @OneToMany(mappedBy = "persona", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Cliente> clientes;
}
