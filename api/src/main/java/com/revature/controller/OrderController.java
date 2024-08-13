package com.revature.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Order;
import com.revature.model.OrderId;
import com.revature.service.OrderService;

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

    @GetMapping("/user/{userId}/menu/{menuId}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long userId, @PathVariable Long menuId) {
        OrderId orderId = new OrderId(userId, menuId);
        Optional<Order> order = orderService.findById(orderId);
        return order.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.save(order);
        return ResponseEntity.ok(savedOrder);
    }

    @DeleteMapping("/user/{userId}/menu/{menuId}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long userId, @PathVariable Long menuId) {
        OrderId orderId = new OrderId(userId, menuId);
        if (!orderService.findById(orderId).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        orderService.deleteById(orderId);
        return ResponseEntity.noContent().build();
    }
}