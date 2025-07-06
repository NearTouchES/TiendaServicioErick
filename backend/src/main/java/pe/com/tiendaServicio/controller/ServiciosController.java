package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.Servicio;
import pe.com.tiendaServicio.service.ServiciosService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/servicios")
public class ServiciosController {

    private final ServiciosService serviciosService;

    public ServiciosController(ServiciosService serviciosService) {
        this.serviciosService = serviciosService;
    }

    @GetMapping
    public List<Servicio> listar() {
        return serviciosService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Servicio> obtenerPorId(@PathVariable Integer id) {
        Optional<Servicio> servicio = serviciosService.obtenerPorId(id);
        return servicio.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Servicio> crear(@RequestBody Servicio servicio) {
        Servicio nuevo = serviciosService.guardar(servicio);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Servicio> actualizar(@PathVariable Integer id, @RequestBody Servicio servicioActualizado) {
        Optional<Servicio> servicioExistente = serviciosService.obtenerPorId(id);
        if (servicioExistente.isPresent()) {
            servicioActualizado.setIdServicio(id);
            return ResponseEntity.ok(serviciosService.guardar(servicioActualizado));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        serviciosService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
