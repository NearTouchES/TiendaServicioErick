package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.ItemVenta;

import java.util.List;

@Repository
public interface ItemVentaRepository extends JpaRepository<ItemVenta, Integer> {
    List<ItemVenta> findByVentaIdVenta(Integer ventaId);      // atributo 'venta'
    List<ItemVenta> findByServicioIdServicio(Integer servicioId);  // atributo 'servicio'
}
