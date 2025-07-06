package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Servicios;

@Repository
public interface ServiciosRepository extends JpaRepository<Servicios, Integer> {
}
