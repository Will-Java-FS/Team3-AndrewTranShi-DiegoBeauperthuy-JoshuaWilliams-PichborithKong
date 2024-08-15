package com.revature.service;

import com.revature.model.Order;
import com.revature.model.OrderId;
import com.revature.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Map<String, Object>> findAllGroupedByUserNameAndUserId() {
        //Retrieve data
        List<Object[]> results = orderRepository.findAllGroupedByUserNameAndUserId();
        //Maps key are user ID, value is another map holding the user details and orders
        Map<Long, Map<String, Object>> groupedOrders = new LinkedHashMap<>();

        //Iterate over the object
        for (Object[] result : results) {
            Long userId = (Long) result[0];
            String username = (String) result[1];
            Long menuId = (Long) result[2];
            String menuName = (String) result[3];
            String menuType = (String) result[4];
            BigDecimal price = (BigDecimal) result[5];
            String description = (String) result[6];
            LocalDateTime menuUpdatedAt = (LocalDateTime) result[7];
            LocalDateTime createAt = (LocalDateTime) result[8];

            //usermap has userId, username, and empty list of orders
            groupedOrders.putIfAbsent(userId, new LinkedHashMap<>());
            Map<String, Object> userMap = groupedOrders.get(userId);
            userMap.putIfAbsent("userId", userId);
            userMap.putIfAbsent("username", username);
            userMap.putIfAbsent("orders", new ArrayList<>());

            //Create new map with the orderDetails
            List<Map<String, Object>> orders = (List<Map<String, Object>>) userMap.get("orders");
            Map<String, Object> orderDetails = new LinkedHashMap<>();
            orderDetails.put("menuId", menuId);
            orderDetails.put("menuName", menuName);
            orderDetails.put("menuType", menuType);
            orderDetails.put("price", price);
            orderDetails.put("description", description);
            orderDetails.put("createAt", createAt);
            orderDetails.put("menuUpdatedAt", menuUpdatedAt);

            orders.add(orderDetails);
        }

        return new ArrayList<>(groupedOrders.values());
    }

    public List<Object[]> findOrdersByUserId(Long userId) {
        return orderRepository.findOrdersByUserId(userId);
    }

    public Optional<Order> findById(OrderId orderId) {
        return orderRepository.findById(orderId);
    }

    public Order save(Order order) {
        return orderRepository.save(order);
    }

    public void deleteById(OrderId orderId) {
        orderRepository.deleteById(orderId);
    }
}