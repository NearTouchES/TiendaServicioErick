package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import pe.com.tiendaServicio.model.ItemVenta;
import pe.com.tiendaServicio.repository.ItemVentaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ItemVentaService {

    private final ItemVentaRepository itemVentaRepository;

    public ItemVentaService(ItemVentaRepository itemVentaRepository) {
        this.itemVentaRepository = itemVentaRepository;
    }

    public List<ItemVenta> listarTodos() {
        return itemVentaRepository.findAll();
    }

    public Optional<ItemVenta> obtenerPorId(Integer id) {
        return itemVentaRepository.findById(id);
    }

    public ItemVenta guardar(ItemVenta itemVenta) {
        return itemVentaRepository.save(itemVenta);
    }

    public void eliminar(Integer id) {
        itemVentaRepository.deleteById(id);
    }

    public List<ItemVenta> listarPorVentaId(Integer ventaId) {
        return itemVentaRepository.findByVentaIdVenta(ventaId);
    }

    public List<ItemVenta> listarPorServicioId(Integer servicioId) {
        return itemVentaRepository.findByServicioIdServicio(servicioId);
    }
}
