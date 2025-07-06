package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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
        if (clienteRepository.existsById(id)) {
            clienteRepository.deleteById(id);
        } else {
            throw new RuntimeException("Cliente no encontrado con id " + id);
        }
    }

    public List<Cliente> listarPorPersonaId(Integer idPersona) {
        return clienteRepository.findByPersona_IdPersona(idPersona);
    }

    public List<Cliente> buscarPorTipoCliente(String tipoCliente) {
        return clienteRepository.findByTipoClienteContainingIgnoreCase(tipoCliente);
    }

    @Transactional
    public Cliente actualizar(Integer id, Cliente clienteActualizado) {
        return clienteRepository.findById(id).map(clienteExistente -> {
            clienteExistente.setTipoCliente(clienteActualizado.getTipoCliente());
            clienteExistente.setPersona(clienteActualizado.getPersona());
            return clienteRepository.save(clienteExistente);
        }).orElseThrow(() -> new RuntimeException("Cliente no encontrado con id " + id));
    }
}