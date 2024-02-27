package com.example.ecommerce.Pojo;


import org.springframework.web.multipart.MultipartFile;

import com.example.ecommerce.Entity.Product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductPojo {
    private Integer id;
    private  String price;
    private  String productname;
    private String description;
     private String quantity;
     private String brand;
     private String category;
     private String color;
     private MultipartFile image;
     public ProductPojo(Product product){
       this.id=product.getId();
       this.price=product.getPrice();
       this.description=product.getDescription();
       this.productname=product.getProductname();
       this.quantity=product.getQuantity();
       this.brand=product.getBrand();
       this.category=product.getCatrgory();
       this.color=product.getColor();
     }
}
