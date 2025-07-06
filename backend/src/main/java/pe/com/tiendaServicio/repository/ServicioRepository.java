package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Servicio;

@Repository
public interface ServicioRepository extends JpaRepository<Servicio, Integer> {
}
