package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.ItemVentas;

import java.util.List;
import java.util.Date;

@Repository
public interface ItemVentasRepository extends JpaRepository<ItemVentas, Integer> {
    List<ItemVentas> findByVenta_IdVenta(Integer ventaId);
    List<ItemVentas> findByServicio_IdServicio(Integer servicioId);
    List<ItemVentas> findByFechaInicioBetween(Date inicio, Date fin);
}


