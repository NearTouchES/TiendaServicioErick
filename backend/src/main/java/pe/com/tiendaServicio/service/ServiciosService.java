package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.com.tiendaServicio.model.Servicios;
import pe.com.tiendaServicio.repository.ServiciosRepository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class ServiciosService {

    private final ServiciosRepository serviciosRepository;

    public ServiciosService(ServiciosRepository serviciosRepository) {
        this.serviciosRepository = serviciosRepository;
    }

    public List<Servicios> listarTodos() {
        return serviciosRepository.findAll();
    }

    public Optional<Servicios> obtenerPorId(Integer id) {
        return serviciosRepository.findById(id);
    }

    public List<Servicios> buscarPorNombre(String nombre) {
        return serviciosRepository.findByNombreServicioContainingIgnoreCase(nombre);
    }

    public List<Servicios> buscarPorCostoMenorA(BigDecimal costo) {
        return serviciosRepository.findByCostoServicioLessThan(costo);
    }

    public Servicios guardar(Servicios servicios) {
        return serviciosRepository.save(servicios);
    }

    public void eliminar(Integer id) {
        if (serviciosRepository.existsById(id)) {
            serviciosRepository.deleteById(id);
        } else {
            throw new RuntimeException("Servicio no encontrado con ID " + id);
        }
    }

    @Transactional
    public Servicios actualizar(Integer id, Servicios servicioActualizado) {
        return serviciosRepository.findById(id).map(servicioExistente -> {
            servicioExistente.setNombreServicio(servicioActualizado.getNombreServicio());
            servicioExistente.setDescripcion(servicioActualizado.getDescripcion());
            servicioExistente.setCostoServicio(servicioActualizado.getCostoServicio());
            return serviciosRepository.save(servicioExistente);
        }).orElseThrow(() -> new RuntimeException("Servicio no encontrado con ID " + id));
    }
}
