package com.example.ecommerce.Services;

import java.io.IOException;
import java.util.List;

import com.example.ecommerce.Entity.Product;
import com.example.ecommerce.Pojo.ProductPojo;

public interface ProductServices {
    ProductPojo save(ProductPojo productPojo) throws IOException;
    List<Product> findAll();
    List<Product> getThreeRandomData();

    Product findById(Integer id);
    void deleteById(Integer id);
}

