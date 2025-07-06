package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.ItemVenta;

import java.util.List;
import java.util.Date;

@Repository
public interface ItemVentasRepository extends JpaRepository<ItemVenta, Integer> {
    List<ItemVenta> findByVenta_IdVenta(Integer ventaId);
    List<ItemVenta> findByServicio_IdServicio(Integer servicioId);
    List<ItemVenta> findByFechaInicioBetween(Date inicio, Date fin);
}


