package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Ventas;

import java.util.List;

@Repository
public interface VentasRepository extends JpaRepository<Ventas, Integer> {
    List<Ventas> findByEmpleadoIdEmpleado(Integer empleadoId);
    List<Ventas> findByClienteIdCliente(Integer clienteId);
}
