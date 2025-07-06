package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Persona;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Integer> {
    Persona findByDni(String dni);
}
