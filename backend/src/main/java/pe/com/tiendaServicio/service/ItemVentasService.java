package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import pe.com.tiendaServicio.model.ItemVentas;
import pe.com.tiendaServicio.repository.ItemVentasRepository;

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
        itemVentasRepository.deleteById(id);
    }

    public List<ItemVentas> listarPorVentaId(Integer ventaId) {
        return itemVentasRepository.findByVentasIdVenta(ventaId);
    }

    public List<ItemVentas> listarPorServicioId(Integer servicioId) {
        return itemVentasRepository.findByServiciosIdServicio(servicioId);
    }
}
