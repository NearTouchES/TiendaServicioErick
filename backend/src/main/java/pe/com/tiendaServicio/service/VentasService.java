package pe.com.tiendaServicio.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.com.tiendaServicio.model.ItemVenta;
import pe.com.tiendaServicio.model.Venta;
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

    public List<Venta> listarTodos() {
        return ventasRepository.findAll();
    }

    public Optional<Venta> obtenerPorId(Integer id) {
        return ventasRepository.findById(id);
    }

    public List<Venta> listarPorEmpleadoId(Integer empleadoId) {
        return ventasRepository.findByEmpleado_IdEmpleado(empleadoId);
    }

    public List<Venta> listarPorClienteId(Integer clienteId) {
        return ventasRepository.findByCliente_IdCliente(clienteId);
    }

    public List<Venta> listarPorRangoFechas(Date inicio, Date fin) {
        return ventasRepository.findByFechaVentaBetween(inicio, fin);
    }

    @Transactional
    public Venta guardar(Venta venta) {
        calcularTotales(venta);
        return ventasRepository.save(venta);
    }

    @Transactional
    public Venta actualizar(Integer id, Venta ventaActualizada) {
        return ventasRepository.findById(id).map(ventaExistente -> {
            ventaExistente.setFechaVenta(ventaActualizada.getFechaVenta());
            ventaExistente.setCliente(ventaActualizada.getCliente());
            ventaExistente.setEmpleado(ventaActualizada.getEmpleado());
            ventaExistente.getItems().clear();
            for (ItemVenta item : ventaActualizada.getItems()) {
                item.setVenta(ventaExistente);
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
    private void calcularTotales(Venta venta) {
        BigDecimal subtotal = BigDecimal.ZERO;

        for (ItemVenta item : venta.getItems()) {
            if (item.getServicio() != null && item.getServicio().getCostoServicio() != null) {
                subtotal = subtotal.add(item.getServicio().getCostoServicio());
            }
        }

        BigDecimal igv = subtotal.multiply(BigDecimal.valueOf(0.18));
        BigDecimal total = subtotal.add(igv);

        venta.setSubtotal(subtotal.doubleValue());
        venta.setIgv(igv.doubleValue());
        venta.setTotal(total.doubleValue());
    }
}