package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import pe.com.tiendaServicio.model.Servicio;
import pe.com.tiendaServicio.repository.ServicioRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ServicioService {

    private final ServicioRepository servicioRepository;

    public ServicioService(ServicioRepository servicioRepository) {
        this.servicioRepository = servicioRepository;
    }

    public List<Servicio> listarTodos() {
        return servicioRepository.findAll();
    }

    public Optional<Servicio> obtenerPorId(Integer id) {
        return servicioRepository.findById(id);
    }

    public Servicio guardar(Servicio servicio) {
        return servicioRepository.save(servicio);
    }

    public void eliminar(Integer id) {
        servicioRepository.deleteById(id);
    }

    public boolean existePorId(Integer id) {
        return servicioRepository.existsById(id);
    }
}
