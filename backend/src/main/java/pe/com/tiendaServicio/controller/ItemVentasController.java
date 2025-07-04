package pe.com.tiendaServicio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.com.tiendaServicio.model.ItemVentas;
import pe.com.tiendaServicio.service.ItemVentasService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/itemventas")
public class ItemVentasController {

    private final ItemVentasService itemVentasService;

    public ItemVentasController(ItemVentasService itemVentasService) {
        this.itemVentasService = itemVentasService;
    }

    @GetMapping
    public List<ItemVentas> listar() {
        return itemVentasService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemVentas> obtenerPorId(@PathVariable Integer id) {
        Optional<ItemVentas> item = itemVentasService.obtenerPorId(id);
        return item.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ItemVentas> crear(@RequestBody ItemVentas item) {
        ItemVentas nuevoItem = itemVentasService.guardar(item);
        return ResponseEntity.ok(nuevoItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItemVentas> actualizar(@PathVariable Integer id, @RequestBody ItemVentas itemActualizado) {
        Optional<ItemVentas> itemExistente = itemVentasService.obtenerPorId(id);
        if (itemExistente.isPresent()) {
            itemActualizado.setIdItemVentas(id);
            return ResponseEntity.ok(itemVentasService.guardar(itemActualizado));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        itemVentasService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}