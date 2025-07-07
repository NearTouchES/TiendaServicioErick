package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.Servicio;
import pe.com.tiendaServicio.service.ServicioService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/servicios")
public class ServicioController {

    private final ServicioService servicioService;

    public ServicioController(ServicioService servicioService) {
        this.servicioService = servicioService;
    }

    @GetMapping
    public List<Servicio> listar() {
        return servicioService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Servicio> obtenerPorId(@PathVariable Integer id) {
        return servicioService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Servicio> crear(@Valid @RequestBody Servicio servicio) {
        Servicio nuevo = servicioService.guardar(servicio);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Servicio> actualizar(@PathVariable Integer id, @Valid @RequestBody Servicio servicio) {
        if (servicioService.existePorId(id)) {
            servicio.setIdServicio(id);
            return ResponseEntity.ok(servicioService.guardar(servicio));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        if (servicioService.existePorId(id)) {
            servicioService.eliminar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
