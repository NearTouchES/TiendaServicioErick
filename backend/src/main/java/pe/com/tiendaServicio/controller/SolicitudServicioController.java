package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.SolicitudServicio;
import pe.com.tiendaServicio.service.SolicitudServicioService;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/solicitudes")
public class SolicitudServicioController {

    private final SolicitudServicioService solicitudServicioService;

    public SolicitudServicioController(SolicitudServicioService solicitudServicioService) {
        this.solicitudServicioService = solicitudServicioService;
    }

    @GetMapping
    public List<SolicitudServicio> listar() {
        return solicitudServicioService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SolicitudServicio> obtenerPorId(@PathVariable Integer id) {
        return solicitudServicioService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<SolicitudServicio> crear(@Valid @RequestBody SolicitudServicio solicitud) {
        SolicitudServicio nueva = solicitudServicioService.guardar(solicitud);
        return ResponseEntity.ok(nueva);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        if (solicitudServicioService.existePorId(id)) {
            solicitudServicioService.eliminar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
