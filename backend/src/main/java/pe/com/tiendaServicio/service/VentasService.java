package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import pe.com.tiendaServicio.model.Ventas;
import pe.com.tiendaServicio.repository.VentasRepository;

import java.util.List;
import java.util.Optional;

@Service
public class VentasService {
    private final VentasRepository ventasRepository;

    public VentasService(VentasRepository ventasRepository) {
        this.ventasRepository = ventasRepository;
    }

    public List<Ventas> listarTodos() {
        return ventasRepository.findAll();
    }

    public Optional<Ventas> obtenerPorId(Integer id) {
        return ventasRepository.findById(id);
    }

    public Ventas guardar(Ventas ventas) {
        return ventasRepository.save(ventas);
    }

    public void eliminar(Integer id) {
        ventasRepository.deleteById(id);
    }

    public List<Ventas> listarPorEmpleadoId(Integer empleadoId) {
        return ventasRepository.findByEmpleadoIdEmpleado(empleadoId);
    }

    public List<Ventas> listarPorClienteId(Integer clienteId) {
        return ventasRepository.findByClienteIdCliente(clienteId);
    }
}
