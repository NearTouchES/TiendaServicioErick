package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.Administrador;
import pe.com.tiendaServicio.service.AdministradorService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/administradores")
@CrossOrigin(origins = "*") // opcional si tu frontend está separado
public class AdministradorController {

    private final AdministradorService administradorService;

    public AdministradorController(AdministradorService administradorService) {
        this.administradorService = administradorService;
    }

    @GetMapping
    public ResponseEntity<List<Administrador>> listar() {
        List<Administrador> administradores = administradorService.listarTodos();
        return ResponseEntity.ok(administradores);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Administrador> obtenerPorId(@PathVariable Integer id) {
        return administradorService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Administrador> crear(@RequestBody Administrador administrador) {
        try {
            Administrador nuevo = administradorService.guardar(administrador);
            return ResponseEntity.ok(nuevo);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build(); // puedes usar logger si deseas
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Administrador> actualizar(@PathVariable Integer id, @RequestBody Administrador administradorActualizado) {
        Optional<Administrador> existente = administradorService.obtenerPorId(id);
        if (existente.isPresent()) {
            administradorActualizado.setIdAdministrador(id);
            Administrador actualizado = administradorService.guardar(administradorActualizado);
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        try {
            administradorService.eliminar(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // ya manejado desde service
        }
    }

    @GetMapping("/persona/{personaId}")
    public ResponseEntity<List<Administrador>> listarPorPersona(@PathVariable Integer personaId) {
        List<Administrador> lista = administradorService.listarPorPersonaId(personaId);
        return ResponseEntity.ok(lista);
    }
}
