package com.example.ecommerce.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.ecommerce.Entity.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order,Integer> {
    @Query(value = "SELECT * FROM orders where user_id=?1", nativeQuery = true)
    List<Order> findOrderById(Integer id);
}
