package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Servicio;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ServiciosRepository extends JpaRepository<Servicio, Integer> {
    List<Servicio> findByNombreServicioContainingIgnoreCase(String nombre);
    List<Servicio> findByCostoServicioLessThan(BigDecimal costo);
}
