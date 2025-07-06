package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.com.tiendaServicio.model.Persona;
import pe.com.tiendaServicio.repository.PersonaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PersonaService {

    private final PersonaRepository personaRepository;

    public PersonaService(PersonaRepository personaRepository) {
        this.personaRepository = personaRepository;
    }

    public List<Persona> listarTodos() {
        return personaRepository.findAll();
    }

    public Optional<Persona> obtenerPorId(Integer id) {
        return personaRepository.findById(id);
    }

    public Optional<Persona> buscarPorDni(String dni) {
        return Optional.ofNullable(personaRepository.findByDni(dni));
    }

    public Persona guardar(Persona persona) {
        return personaRepository.save(persona);
    }

    public void eliminar(Integer id) {
        if (personaRepository.existsById(id)) {
            personaRepository.deleteById(id);
        } else {
            throw new RuntimeException("Persona no encontrada con ID " + id);
        }
    }

    @Transactional
    public Persona actualizar(Integer id, Persona personaActualizada) {
        return personaRepository.findById(id).map(personaExistente -> {
            personaExistente.setDni(personaActualizada.getDni());
            personaExistente.setNombres(personaActualizada.getNombres());
            personaExistente.setApellidos(personaActualizada.getApellidos());
            personaExistente.setCelular(personaActualizada.getCelular());
            personaExistente.setCorreoPersonal(personaActualizada.getCorreoPersonal());
            personaExistente.setNacionalidad(personaActualizada.getNacionalidad());
            return personaRepository.save(personaExistente);
        }).orElseThrow(() -> new RuntimeException("Persona no encontrada con ID " + id));
    }
}
