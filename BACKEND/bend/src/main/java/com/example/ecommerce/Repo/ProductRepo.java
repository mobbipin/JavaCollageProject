package com.example.ecommerce.Repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.ecommerce.Entity.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {
    @Query(value = "SELECT * FROM product ORDER BY RANDOM() LIMIT 3", nativeQuery = true)
    List<Product> getThreeRandomData();
}
