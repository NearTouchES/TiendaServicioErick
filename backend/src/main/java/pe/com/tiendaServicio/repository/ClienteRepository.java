package pe.com.tiendaServicio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.com.tiendaServicio.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    // Para validación de duplicados si usas el correo como identificador de cliente
    boolean existsByCorreo(String correo);

    // Puedes agregar más métodos si quieres buscar por nombre, etc.
    // List<Cliente> findByNombreContainingIgnoreCase(String nombre);
}
