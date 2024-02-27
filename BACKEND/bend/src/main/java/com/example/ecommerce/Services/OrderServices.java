package com.example.ecommerce.Services;

import java.util.List;

import com.example.ecommerce.Entity.Order;
import com.example.ecommerce.Pojo.OrderPojo;

public interface OrderServices {
    OrderPojo save(OrderPojo orderPojo);
    List<Order> findOrderById(Integer id);

    List<Order> findAll();

    Order findById(Integer id);
    void deleteById(Integer id);
}
