package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import pe.com.tiendaServicio.model.Servicios;
import pe.com.tiendaServicio.repository.ServiciosRepository;

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

    public Servicios guardar(Servicios servicios) {
        return serviciosRepository.save(servicios);
    }

    public void eliminar(Integer id) {
        serviciosRepository.deleteById(id);
    }
}
