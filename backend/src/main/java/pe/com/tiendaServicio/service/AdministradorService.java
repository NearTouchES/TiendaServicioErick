package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.com.tiendaServicio.model.Administrador;
import pe.com.tiendaServicio.repository.AdministradorRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AdministradorService {

    private final AdministradorRepository administradorRepository;

    public AdministradorService(AdministradorRepository administradorRepository) {
        this.administradorRepository = administradorRepository;
    }

    // Listar todos los administradores
    public List<Administrador> listarTodos() {
        return administradorRepository.findAll();
    }

    // Obtener un administrador por ID
    public Optional<Administrador> obtenerPorId(Integer id) {
        return administradorRepository.findById(id);
    }

    // Guardar o registrar un nuevo administrador
    public Administrador guardar(Administrador administrador) {
        if (administrador.getPersona() == null || administrador.getPersona().getIdPersona() == null) {
            throw new IllegalArgumentException("Debe proporcionar una persona válida.");
        }
        return administradorRepository.save(administrador);
    }

    // Eliminar un administrador por ID
    public void eliminar(Integer id) {
        if (!administradorRepository.existsById(id)) {
            throw new RuntimeException("Administrador no encontrado con ID: " + id);
        }
        administradorRepository.deleteById(id);
    }

    // Buscar administradores por ID de persona relacionada
    public List<Administrador> listarPorPersonaId(Integer idPersona) {
        return administradorRepository.findByPersona_IdPersona(idPersona);
    }

    // Actualizar datos de un administrador existente
    @Transactional
    public Administrador actualizar(Integer id, Administrador administradorActualizado) {
        return administradorRepository.findById(id)
            .map(adminExistente -> {
                adminExistente.setCorreoInstitucional(administradorActualizado.getCorreoInstitucional());
                adminExistente.setSalario(administradorActualizado.getSalario());
                adminExistente.setPersona(administradorActualizado.getPersona());
                return administradorRepository.save(adminExistente);
            })
            .orElseThrow(() -> new RuntimeException("Administrador no encontrado con ID: " + id));
    }
}
