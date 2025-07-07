package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.SolicitudServicio;

import java.util.List;

@Repository
public interface SolicitudServicioRepository extends JpaRepository<SolicitudServicio, Integer> {

    List<SolicitudServicio> findByClienteIdCliente(Integer idCliente);

    List<SolicitudServicio> findByEstado(String estado);

    // Opcional: consultar por servicio
    List<SolicitudServicio> findByServicioIdServicio(Integer idServicio);
}
