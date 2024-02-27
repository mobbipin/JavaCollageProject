package com.example.ecommerce.Pojo;
import com.example.ecommerce.Entity.Order;

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
public class OrderPojo {
    private Integer id;

    private String quantity;
    private  String address;
    private  int product_id;
    private  int user_id;



    public OrderPojo(Order order) {
        this.id=order.getId();
        this.quantity=order.getQuantity();
        this.address=order.getAddress();
        this.product_id=order.getProduct_id().getId();
        this.user_id=order.getUser_id().getId();
    }
}
