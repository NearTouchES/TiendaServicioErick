package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import pe.com.tiendaServicio.model.Cliente;
import pe.com.tiendaServicio.repository.ClienteRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {
    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public List<Cliente> listarTodos() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> obtenerPorId(Integer id) {
        return clienteRepository.findById(id);
    }

    public Cliente guardar(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public void eliminar(Integer id) {
        clienteRepository.deleteById(id);
    }

    public List<Cliente> listarPorPersonaId(Integer personaId) {
        return clienteRepository.findByPersonaIdPersona(personaId);
    }
}
