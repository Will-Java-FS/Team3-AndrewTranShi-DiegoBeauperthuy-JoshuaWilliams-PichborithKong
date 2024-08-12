package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.Order;
import com.revature.model.OrderId;

@Repository
public interface OrderRepository extends JpaRepository<Order, OrderId> {
}