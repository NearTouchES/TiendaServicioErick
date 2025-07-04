package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.Ventas;
import pe.com.tiendaServicio.service.VentasService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ventas")
public class VentasController {

    private final VentasService ventasService;

    public VentasController(VentasService ventasService) {
        this.ventasService = ventasService;
    }

    @GetMapping
    public List<Ventas> listar() {
        return ventasService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ventas> obtenerPorId(@PathVariable Integer id) {
        Optional<Ventas> venta = ventasService.obtenerPorId(id);
        return venta.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Ventas> crear(@RequestBody Ventas venta) {
        Ventas nuevaVenta = ventasService.guardar(venta);
        return ResponseEntity.ok(nuevaVenta);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ventas> actualizar(@PathVariable Integer id, @RequestBody Ventas ventaActualizada) {
        Optional<Ventas> ventaExistente = ventasService.obtenerPorId(id);
        if (ventaExistente.isPresent()) {
            ventaActualizada.setIdVenta(id);
            return ResponseEntity.ok(ventasService.guardar(ventaActualizada));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        ventasService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}