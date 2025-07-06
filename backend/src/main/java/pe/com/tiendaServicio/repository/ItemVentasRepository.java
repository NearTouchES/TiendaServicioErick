package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.ItemVentas;

import java.util.List;

@Repository
public interface ItemVentasRepository extends JpaRepository<ItemVentas, Integer> {
    List<ItemVentas> findByVentasIdVenta(Integer ventaId);
    List<ItemVentas> findByServiciosIdServicio(Integer servicioId);
}