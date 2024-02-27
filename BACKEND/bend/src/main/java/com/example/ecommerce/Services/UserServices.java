package com.example.ecommerce.Services;

import com.example.ecommerce.Entity.User;
import com.example.ecommerce.Pojo.UserPojo;

public interface UserServices {
    UserPojo save (UserPojo userPojo);
    User findByEmail(String email);

    User findBYId(Integer id);


}
