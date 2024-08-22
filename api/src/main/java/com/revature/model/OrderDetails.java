package com.revature.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.Data;

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
        this.whenOrdered = order.getCreateAt();  // Use createAt for the order time
    }

}
