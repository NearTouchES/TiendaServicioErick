package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.Administrador;
import pe.com.tiendaServicio.service.AdministradorService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/administradores")
public class AdministradorController {

    private final AdministradorService administradorService;

    public AdministradorController(AdministradorService administradorService) {
        this.administradorService = administradorService;
    }

    @GetMapping
    public List<Administrador> listar() {
        return administradorService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Administrador> obtenerPorId(@PathVariable Integer id) {
        Optional<Administrador> administrador = administradorService.obtenerPorId(id);
        return administrador.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Administrador> crear(@RequestBody Administrador administrador) {
        Administrador nuevoAdministrador = administradorService.guardar(administrador);
        return ResponseEntity.ok(nuevoAdministrador);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Administrador> actualizar(@PathVariable Integer id, @RequestBody Administrador administradorActualizado) {
        Optional<Administrador> administradorExistente = administradorService.obtenerPorId(id);
        if (administradorExistente.isPresent()) {
            administradorActualizado.setIdAdministrador(id);
            return ResponseEntity.ok(administradorService.guardar(administradorActualizado));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        administradorService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
