package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.Servicios;
import pe.com.tiendaServicio.service.ServiciosService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/servicios")
public class ServiciosController {

    private final ServiciosService serviciosService;

    public ServiciosController(ServiciosService serviciosService) {
        this.serviciosService = serviciosService;
    }

    @GetMapping
    public List<Servicios> listar() {
        return serviciosService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Servicios> obtenerPorId(@PathVariable Integer id) {
        Optional<Servicios> servicio = serviciosService.obtenerPorId(id);
        return servicio.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Servicios> crear(@RequestBody Servicios servicio) {
        Servicios nuevo = serviciosService.guardar(servicio);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Servicios> actualizar(@PathVariable Integer id, @RequestBody Servicios servicioActualizado) {
        Optional<Servicios> servicioExistente = serviciosService.obtenerPorId(id);
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
