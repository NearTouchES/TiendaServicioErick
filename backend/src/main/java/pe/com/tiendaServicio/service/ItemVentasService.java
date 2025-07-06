package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.com.tiendaServicio.model.ItemVentas;
import pe.com.tiendaServicio.repository.ItemVentasRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ItemVentasService {

    private final ItemVentasRepository itemVentasRepository;

    public ItemVentasService(ItemVentasRepository itemVentasRepository) {
        this.itemVentasRepository = itemVentasRepository;
    }

    public List<ItemVentas> listarTodos() {
        return itemVentasRepository.findAll();
    }

    public Optional<ItemVentas> obtenerPorId(Integer id) {
        return itemVentasRepository.findById(id);
    }

    public ItemVentas guardar(ItemVentas itemVentas) {
        return itemVentasRepository.save(itemVentas);
    }

    public void eliminar(Integer id) {
        if (itemVentasRepository.existsById(id)) {
            itemVentasRepository.deleteById(id);
        } else {
            throw new RuntimeException("ItemVentas no encontrado con id " + id);
        }
    }

    public List<ItemVentas> listarPorVentaId(Integer ventaId) {
        return itemVentasRepository.findByVentas_IdVenta(ventaId);
    }

    public List<ItemVentas> listarPorServicioId(Integer servicioId) {
        return itemVentasRepository.findByServicios_IdServicio(servicioId);
    }

    public List<ItemVentas> listarPorRangoFecha(Date inicio, Date fin) {
        return itemVentasRepository.findByFechaInicioBetween(inicio, fin);
    }

    @Transactional
    public ItemVentas actualizar(Integer id, ItemVentas itemActualizado) {
        return itemVentasRepository.findById(id).map(itemExistente -> {
            itemExistente.setFechaInicio(itemActualizado.getFechaInicio());
            itemExistente.setFechaFin(itemActualizado.getFechaFin());
            itemExistente.setVentas(itemActualizado.getVentas());
            itemExistente.setServicios(itemActualizado.getServicios());
            return itemVentasRepository.save(itemExistente);
        }).orElseThrow(() -> new RuntimeException("ItemVentas no encontrado con id " + id));
    }
}