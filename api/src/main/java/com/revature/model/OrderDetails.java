package com.revature.model;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;


@Data
public class OrderDetails {
    String user;
    String menuItem;
    BigDecimal itemPrice;
    String description;
    LocalDateTime whenOrdered;

    public OrderDetails(Order order) {
        this.user = order.getUser().getUsername();
        this.menuItem = order.getMenu().getName();
        this.itemPrice = order.getMenu().getPrice();
        this.description = order.getMenu().getDescription();
        this.whenOrdered = order.getUpdateAt();
    }
}