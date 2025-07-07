package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Empleado;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Integer> {

    boolean existsByCorreoInstitucional(String correoInstitucional);

    // Puedes añadir más búsquedas si fuera necesario, por ejemplo:
    // List<Empleado> findByPuestoContainingIgnoreCase(String puesto);
}
