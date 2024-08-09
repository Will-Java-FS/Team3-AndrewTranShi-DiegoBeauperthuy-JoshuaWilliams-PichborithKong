package com.revature.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// since we have a composite primary key (user_id, menu_id),
// we need an OrderId class to represent this composite key:
@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class OrderId implements Serializable {

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "menu_id")
    private Long menuId;
}