package com.revature.controller;

import com.revature.model.Order;
import com.revature.model.OrderId;
import com.revature.model.OrderDetails;
import com.revature.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.findAll();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{userId}/{menuId}")
    public ResponseEntity<OrderDetails> getOrderById(@PathVariable Long userId, @PathVariable Long menuId) {
        try {
            if (userId <= 0 || menuId <= 0) {
                return ResponseEntity.badRequest().build(); // 400
            }
            OrderId orderId = new OrderId(userId, menuId);
            Optional<Order> order = orderService.findById(orderId);
            return order.map(o -> ResponseEntity.ok(new OrderDetails(o))) // 200
                    .orElseGet(() -> ResponseEntity.notFound().build()); // 404
        } catch (Exception e) {
            System.out.println("Error occurred while fetching order");
            return ResponseEntity.internalServerError().build(); // 500
        }
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.save(order);
        return ResponseEntity.ok(savedOrder);
    }

    @DeleteMapping("/{userId}/{menuId}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long userId, @PathVariable Long menuId) {
        try {
            if (userId <= 0 || menuId <= 0) {
                return ResponseEntity.badRequest().build(); // 400
            }
            OrderId orderId = new OrderId(userId, menuId);
            Optional<Order> order = orderService.findById(orderId);
            if (order.isEmpty()) {
                return ResponseEntity.notFound().build(); // 404
            }
            orderService.deleteById(orderId);
            return ResponseEntity.noContent().build(); // 204
        } catch (Exception e) {
            System.out.println("Error occurred while deleting order");
            return ResponseEntity.internalServerError().build(); // 500
        }
    }
}