package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.com.tiendaServicio.model.ItemVentas;
import pe.com.tiendaServicio.model.Ventas;
import pe.com.tiendaServicio.repository.VentasRepository;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class VentasService {

    private final VentasRepository ventasRepository;

    public VentasService(VentasRepository ventasRepository) {
        this.ventasRepository = ventasRepository;
    }

    public List<Ventas> listarTodos() {
        return ventasRepository.findAll();
    }

    public Optional<Ventas> obtenerPorId(Integer id) {
        return ventasRepository.findById(id);
    }

    public List<Ventas> listarPorEmpleadoId(Integer empleadoId) {
        return ventasRepository.findByEmpleado_IdEmpleado(empleadoId);
    }

    public List<Ventas> listarPorClienteId(Integer clienteId) {
        return ventasRepository.findByCliente_IdCliente(clienteId);
    }

    public List<Ventas> listarPorRangoFechas(Date inicio, Date fin) {
        return ventasRepository.findByFechaVentaBetween(inicio, fin);
    }

    @Transactional
    public Ventas guardar(Ventas venta) {
        calcularTotales(venta);
        return ventasRepository.save(venta);
    }

    @Transactional
    public Ventas actualizar(Integer id, Ventas ventaActualizada) {
        return ventasRepository.findById(id).map(ventaExistente -> {
            ventaExistente.setFechaVenta(ventaActualizada.getFechaVenta());
            ventaExistente.setCliente(ventaActualizada.getCliente());
            ventaExistente.setEmpleado(ventaActualizada.getEmpleado());

            // Limpia los items anteriores
            ventaExistente.getItems().clear();

            // Reasigna items con referencia a la venta
            for (ItemVentas item : ventaActualizada.getItems()) {
                item.setVentas(ventaExistente);
                ventaExistente.getItems().add(item);
            }

            calcularTotales(ventaExistente);
            return ventasRepository.save(ventaExistente);
        }).orElseThrow(() -> new RuntimeException("Venta no encontrada con ID " + id));
    }

    public void eliminar(Integer id) {
        if (ventasRepository.existsById(id)) {
            ventasRepository.deleteById(id);
        } else {
            throw new RuntimeException("No se puede eliminar. Venta no encontrada con ID " + id);
        }
    }

    // Calcula subtotal, IGV y total a partir de los items de venta
    private void calcularTotales(Ventas venta) {
        BigDecimal subtotal = BigDecimal.ZERO;

        for (ItemVentas item : venta.getItems()) {
            if (item.getServicios() != null && item.getServicios().getCostoServicio() != null) {
                subtotal = subtotal.add(item.getServicios().getCostoServicio());
            }
        }

        BigDecimal igv = subtotal.multiply(BigDecimal.valueOf(0.18));
        BigDecimal total = subtotal.add(igv);

        venta.setSubtotal(subtotal.doubleValue());
        venta.setIgv(igv.doubleValue());
        venta.setTotal(total.doubleValue());
    }
}
