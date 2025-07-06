package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.Venta;
import pe.com.tiendaServicio.service.VentaService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/venta") // ✅ endpoint también en singular
public class VentaController {

    private final VentaService ventaService;

    public VentaController(VentaService ventaService) {
        this.ventaService = ventaService;
    }

    @GetMapping
    public List<Venta> listar() {
        return ventaService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Venta> obtenerPorId(@PathVariable Integer id) {
        Optional<Venta> venta = ventaService.obtenerPorId(id);
        return venta.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<Venta> crear(@RequestBody Venta venta) {
        Venta nuevaVenta = ventaService.guardar(venta);
        return ResponseEntity.ok(nuevaVenta);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Venta> actualizar(@PathVariable Integer id, @RequestBody Venta ventaActualizada) {
        Optional<Venta> ventaExistente = ventaService.obtenerPorId(id);
        if (ventaExistente.isPresent()) {
            ventaActualizada.setIdVenta(id);
            return ResponseEntity.ok(ventaService.guardar(ventaActualizada));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        ventaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
