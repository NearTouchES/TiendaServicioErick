package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Servicio;

@Repository
public interface ServicioRepository extends JpaRepository<Servicio, Integer> {

    // Ejemplo útil: buscar por especialidad o modalidad
    // List<Servicio> findByEspecialidad(String especialidad);
    // List<Servicio> findByModalidad(String modalidad);
}
