package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.com.tiendaServicio.model.ItemVentas;
import pe.com.tiendaServicio.repository.ItemVentasRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ItemVentaService {

    private final ItemVentasRepository itemVentaRepository;

    public ItemVentaService(ItemVentasRepository itemVentaRepository) {
        this.itemVentaRepository = itemVentaRepository;
    }

    public List<ItemVentas> listarTodos() {
        return itemVentaRepository.findAll();
    }

    public Optional<ItemVentas> obtenerPorId(Integer id) {
        return itemVentaRepository.findById(id);
    }

    public ItemVentas guardar(ItemVentas itemVentas) {
        return itemVentaRepository.save(itemVentas);
    }

    public void eliminar(Integer id) {
        if (itemVentaRepository.existsById(id)) {
            itemVentaRepository.deleteById(id);
        } else {
            throw new RuntimeException("ItemVenta no encontrado con id " + id);
        }
    }

    public List<ItemVentas> listarPorVentaId(Integer ventaId) {
        return itemVentaRepository.findByVenta_IdVenta(ventaId);
    }

    public List<ItemVentas> listarPorServicioId(Integer servicioId) {
        return itemVentaRepository.findByServicio_IdServicio(servicioId);
    }

    public List<ItemVentas> listarPorRangoFecha(Date inicio, Date fin) {
        return itemVentaRepository.findByFechaInicioBetween(inicio, fin);
    }

    @Transactional
    public ItemVentas actualizar(Integer id, ItemVentas itemVentas) {
        return itemVentaRepository.findById(id).map(itemExistente -> {
            itemExistente.setFechaInicio(itemVentas.getFechaInicio());
            itemExistente.setFechaFin(itemVentas.getFechaFin());
            itemExistente.setVenta(itemVentas.getVenta());
            itemExistente.setServicio(itemVentas.getServicio());
            return itemVentaRepository.save(itemExistente);
        }).orElseThrow(() -> new RuntimeException("ItemVenta no encontrado con id " + id));
    }
}
