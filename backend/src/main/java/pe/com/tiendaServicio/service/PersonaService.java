package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
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

    public Persona guardar(Persona persona) {
        return personaRepository.save(persona);
    }

    public void eliminar(Integer id) {
        personaRepository.deleteById(id);
    }
}
