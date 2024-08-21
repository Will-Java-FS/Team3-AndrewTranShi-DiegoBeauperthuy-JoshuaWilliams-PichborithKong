package com.revature.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.model.Order;
import com.revature.model.OrderId;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, OrderId> {

    @Query("SELECT o.user.userId, o.user.username, o.menu.menuId, o.menu.name, o.menu.type, o.menu.price, o.menu.description, o.menu.updateAt, o.createAt " +
            "FROM Order o " +
            "ORDER BY o.user.userId, o.createAt")
    List<Object[]> findAllGroupedByUserNameAndUserId();

    @Query("SELECT o.menu.menuId, o.menu.name, o.menu.type, o.menu.price, o.menu.description, o.createAt, o.menu.updateAt " +
            "FROM Order o " +
            "WHERE o.user.userId = :userId " +
            "ORDER BY o.createAt")
    List<Object[]> findOrdersByUserId(Long userId);
}