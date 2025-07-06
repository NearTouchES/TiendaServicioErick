package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.ItemVenta;
import pe.com.tiendaServicio.service.ItemVentaService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/itemventas")
public class ItemVentaController {

    private final ItemVentaService itemVentaService;

    public ItemVentaController(ItemVentaService itemVentaService) {
        this.itemVentaService = itemVentaService;
    }

    @GetMapping
    public List<ItemVenta> listar() {
        return itemVentaService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemVenta> obtenerPorId(@PathVariable Integer id) {
        Optional<ItemVenta> item = itemVentaService.obtenerPorId(id);
        return item.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ItemVenta> crear(@RequestBody ItemVenta item) {
        ItemVenta nuevoItem = itemVentaService.guardar(item);
        return ResponseEntity.ok(nuevoItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItemVenta> actualizar(@PathVariable Integer id, @RequestBody ItemVenta itemActualizado) {
        Optional<ItemVenta> itemExistente = itemVentaService.obtenerPorId(id);
        if (itemExistente.isPresent()) {
            itemActualizado.setIdItemVenta(id);  // CAMBIADO
            return ResponseEntity.ok(itemVentaService.guardar(itemActualizado));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        itemVentaService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}