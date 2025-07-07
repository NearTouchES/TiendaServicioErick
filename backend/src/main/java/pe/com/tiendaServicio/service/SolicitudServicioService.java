package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import pe.com.tiendaServicio.model.SolicitudServicio;
import pe.com.tiendaServicio.repository.SolicitudServicioRepository;

import java.util.List;
import java.util.Optional;

@Service
public class SolicitudServicioService {

    private final SolicitudServicioRepository solicitudServicioRepository;

    public SolicitudServicioService(SolicitudServicioRepository solicitudServicioRepository) {
        this.solicitudServicioRepository = solicitudServicioRepository;
    }

    public List<SolicitudServicio> listarTodos() {
        return solicitudServicioRepository.findAll();
    }

    public Optional<SolicitudServicio> obtenerPorId(Integer id) {
        return solicitudServicioRepository.findById(id);
    }

    public SolicitudServicio guardar(SolicitudServicio solicitud) {
        return solicitudServicioRepository.save(solicitud);
    }

    public void eliminar(Integer id) {
        solicitudServicioRepository.deleteById(id);
    }

    public boolean existePorId(Integer id) {
        return solicitudServicioRepository.existsById(id);
    }

    public List<SolicitudServicio> listarPorCliente(Integer idCliente) {
        return solicitudServicioRepository.findByClienteIdCliente(idCliente);
    }

    public List<SolicitudServicio> listarPorServicio(Integer idServicio) {
        return solicitudServicioRepository.findByServicioIdServicio(idServicio);
    }

    public List<SolicitudServicio> listarPorEstado(String estado) {
        return solicitudServicioRepository.findByEstado(estado);
    }
}
