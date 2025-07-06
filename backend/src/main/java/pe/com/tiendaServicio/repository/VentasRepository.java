package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Ventas;

import java.util.Date;
import java.util.List;

@Repository
public interface VentasRepository extends JpaRepository<Ventas, Integer> {
    List<Ventas> findByCliente_IdCliente(Integer idCliente);
    List<Ventas> findByEmpleado_IdEmpleado(Integer idEmpleado);
    List<Ventas> findByFechaVentaBetween(Date inicio, Date fin);
}
