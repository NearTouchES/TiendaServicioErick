package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.com.tiendaServicio.model.Empleado;
import pe.com.tiendaServicio.repository.EmpleadoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoService {

    private final EmpleadoRepository empleadoRepository;

    public EmpleadoService(EmpleadoRepository empleadoRepository) {
        this.empleadoRepository = empleadoRepository;
    }

    public List<Empleado> listarTodos() {
        return empleadoRepository.findAll();
    }

    public Optional<Empleado> obtenerPorId(Integer id) {
        return empleadoRepository.findById(id);
    }

    public Empleado guardar(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

    public void eliminar(Integer id) {
        if (empleadoRepository.existsById(id)) {
            empleadoRepository.deleteById(id);
        } else {
            throw new RuntimeException("Empleado no encontrado con id " + id);
        }
    }

    public List<Empleado> listarPorPersonaId(Integer personaId) {
        return empleadoRepository.findByPersona_IdPersona(personaId);
    }

    public List<Empleado> buscarPorPuesto(String puesto) {
        return empleadoRepository.findByPuestoContainingIgnoreCase(puesto);
    }

    @Transactional
    public Empleado actualizar(Integer id, Empleado empleadoActualizado) {
        return empleadoRepository.findById(id).map(empleadoExistente -> {
            empleadoExistente.setSalario(empleadoActualizado.getSalario());
            empleadoExistente.setPuesto(empleadoActualizado.getPuesto());
            empleadoExistente.setCorreoInstitucional(empleadoActualizado.getCorreoInstitucional());
            empleadoExistente.setFechaInicioEmpleado(empleadoActualizado.getFechaInicioEmpleado());
            empleadoExistente.setFechaFinEmpleado(empleadoActualizado.getFechaFinEmpleado());
            empleadoExistente.setPersona(empleadoActualizado.getPersona());
            return empleadoRepository.save(empleadoExistente);
        }).orElseThrow(() -> new RuntimeException("Empleado no encontrado con id " + id));
    }
}