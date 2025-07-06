package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.Venta;
import pe.com.tiendaServicio.service.VentasService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ventas")
public class VentasController {

    private final VentasService ventasService;

    public VentasController(VentasService ventasService) {
        this.ventasService = ventasService;
    }

    @GetMapping
    public List<Venta> listar() {
        return ventasService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Venta> obtenerPorId(@PathVariable Integer id) {
        Optional<Venta> venta = ventasService.obtenerPorId(id);
        return venta.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Venta> crear(@RequestBody Venta venta) {
        Venta nuevaVenta = ventasService.guardar(venta);
        return ResponseEntity.ok(nuevaVenta);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Venta> actualizar(@PathVariable Integer id, @RequestBody Venta ventaActualizada) {
        Optional<Venta> ventaExistente = ventasService.obtenerPorId(id);
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