package com.revature.repository;

import com.revature.model.Order;
import com.revature.model.OrderId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, OrderId> {
}