package com.example.ecommerce;


import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import com.example.ecommerce.Entity.Product;
import com.example.ecommerce.Repo.ProductRepo;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
 class ProductRepositoryTests {

    @Autowired
    private ProductRepo productRepo;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void saveProductTest() {

        Product product = Product.builder()
                .productname("Vasaline")
                .build();

        productRepo.save(product);

        Assertions.assertThat(product.getId()).isGreaterThan(0);
    }

    @Test
    @Order(2)
    public void getProductTest() {
        Product productCreated = productRepo.findById(1).get();
        Assertions.assertThat(productCreated.getId()).isEqualTo(1);
    }


    @Test
    @Order(3)
    public void getListOfProductTest() {
        List<Product> Customers = productRepo.findAll();
        Assertions.assertThat(Customers.size()).isGreaterThan(0);
    }


    @Test
    @Order(4)
    @Rollback(value = false)
    public void updateProductTest() {

        Product product = productRepo.findById(1).get();

        product.setProductname("Vasaline");

        Product productUpdated = productRepo.save(product);

        Assertions.assertThat(productUpdated.getProductname()).isEqualTo("Vasaline");

    }
}



//    @Test
//    @Order(5)
//    @Rollback(value = false)
//    public void deleteProductTest(){
//        Product customer = productRepo.findById(1).get();
//        productRepo.delete(customer);
//        Product product1 = null;
//        Optional<Product> optionalProduct = productRepo.getThreeRandomData("Vasaline");
//        if(optionalProduct.isPresent()){
//            product1 = optionalProduct.get();
//        }
//        Assertions.assertThat(product1).isNull();
//    }
//}