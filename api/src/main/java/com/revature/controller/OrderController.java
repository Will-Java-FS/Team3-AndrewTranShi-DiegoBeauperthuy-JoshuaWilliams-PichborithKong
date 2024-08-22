package com.revature.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.revature.model.Menu;
import com.revature.model.Order;
import com.revature.model.OrderDetails;
import com.revature.model.OrderId;
import com.revature.model.User;
import com.revature.service.MenuService;
import com.revature.service.OrderService;
import com.revature.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "${CLIENT_URL}")
public class OrderController {

    private final OrderService orderService;
    private final UserService userService;
    private final MenuService menuService;
    private static final Logger log = LoggerFactory.getLogger(OrderController.class);

    @Autowired
    public OrderController(OrderService orderService, UserService userService, MenuService menuService) {
        this.orderService = orderService;
        this.userService = userService;
        this.menuService = menuService;
    }

    @GetMapping()
    public ResponseEntity<List<Map<String, Object>>> getAllOrders() {
        List<Map<String, Object>> orders = orderService.findAllGroupedByUserNameAndUserId();

        if (orders.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(List.of(Map.of("message", "Orders not found")));
        } else {
            return ResponseEntity.ok(orders);
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getOrdersByUserId(@PathVariable Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User ID not found");
        }
        List<Order> orders = orderRepository.findByUserId(userId);
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{userId}/{menuId}")
    public ResponseEntity<OrderDetails> getOrderById(@PathVariable Long userId, @PathVariable Long menuId) {
        try {
            OrderId orderId = new OrderId(userId, menuId);
            Optional<Order> order = orderService.findById(orderId);
            return order.map(o -> ResponseEntity.ok(new OrderDetails(o))) // 200
                    .orElseGet(() -> ResponseEntity.notFound().build()); // 404
        } catch (Exception e) {
            log.error("Error occurred while fetching order", e);
            return ResponseEntity.internalServerError().build(); // 500
        }
    }

    @PostMapping
    public ResponseEntity<OrderDetails> createOrder(@RequestBody NewOrder newOrder) {
        try {
            Optional<User> user = userService.findById(newOrder.user_id);
            Optional<Menu> menu = menuService.findById(newOrder.menu_id);

            if (user.isEmpty() || menu.isEmpty()) {
                log.error("User or Menu not found. User ID: {}, Menu ID: {}", newOrder.user_id, newOrder.menu_id);
                return ResponseEntity.badRequest().build(); // 400
            }

            Order order = new Order(user.get(), menu.get());
            Order savedOrder = orderService.save(order);
            return ResponseEntity.ok(new OrderDetails(savedOrder)); // 200
        } catch (Exception e) {
            log.error("Error occurred while creating order", e);
            return ResponseEntity.internalServerError().build(); // 500
        }
    }

    @DeleteMapping("/{userId}/{menuId}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long userId, @PathVariable Long menuId) {
        try {
            OrderId orderId = new OrderId(userId, menuId);
            Optional<Order> order = orderService.findById(orderId);
            if (order.isEmpty()) {
                return ResponseEntity.notFound().build(); // 404
            }
            orderService.deleteById(orderId);
            return ResponseEntity.noContent().build(); // 204
        } catch (Exception e) {
            log.error("Error occurred while deleting order", e);
            return ResponseEntity.internalServerError().build(); // 500
        }
    }

    @DeleteMapping("/{userId}/checkout")
    public ResponseEntity<String> checkout(@PathVariable Long userId) {
        try {
            Optional<User> user = userService.findById(userId);

            if (user.isPresent()) {
                orderService.deleteByUserId(userId);
                return ResponseEntity.ok("Thank you for using our service");
            }

            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            log.error("Error occurred while checking out", e);
            return ResponseEntity.internalServerError().body("Checkout failed"); // 500
        }
    }

    private static class NewOrder {

        long user_id;
        long menu_id;

        public NewOrder(long user_id, long menu_id) {
            this.user_id = user_id;
            this.menu_id = menu_id;
        }
    }
}
