package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Venta;

import java.util.Date;
import java.util.List;

@Repository
public interface VentasRepository extends JpaRepository<Venta, Integer> {
    List<Venta> findByCliente_IdCliente(Integer idCliente);
    List<Venta> findByEmpleado_IdEmpleado(Integer idEmpleado);
    List<Venta> findByFechaVentaBetween(Date inicio, Date fin);
}
