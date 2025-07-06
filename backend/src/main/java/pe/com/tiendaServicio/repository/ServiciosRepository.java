package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Servicios;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ServiciosRepository extends JpaRepository<Servicios, Integer> {
    List<Servicios> findByNombreServicioContainingIgnoreCase(String nombre);
    List<Servicios> findByCostoServicioLessThan(BigDecimal costo);
}
