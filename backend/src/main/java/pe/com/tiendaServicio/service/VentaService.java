package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import pe.com.tiendaServicio.model.Venta;
import pe.com.tiendaServicio.repository.VentaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class VentaService {

    private final VentaRepository ventaRepository;

    public VentaService(VentaRepository ventaRepository) {
        this.ventaRepository = ventaRepository;
    }

    public List<Venta> listarTodos() {
        return ventaRepository.findAll();
    }

    public Optional<Venta> obtenerPorId(Integer id) {
        return ventaRepository.findById(id);
    }

    public Venta guardar(Venta venta) {
        return ventaRepository.save(venta);
    }

    public void eliminar(Integer id) {
        ventaRepository.deleteById(id);
    }

    public List<Venta> listarPorEmpleadoId(Integer empleadoId) {
        return ventaRepository.findByEmpleadoIdEmpleado(empleadoId);
    }

    public List<Venta> listarPorClienteId(Integer clienteId) {
        return ventaRepository.findByClienteIdCliente(clienteId);
    }
}