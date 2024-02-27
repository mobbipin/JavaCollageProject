


package com.example.ecommerce;


import java.util.List;
import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import com.example.ecommerce.Entity.User;
import com.example.ecommerce.Repo.UserRepo;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
 class UserRepositoryTests {

    @Autowired
    private UserRepo userRepo;

    @Test
    @Order(1)
    @Rollback(value = false)
    public void saveUserTest() {
        User user= User.builder()
                .fullname("kehar ojha")
                .email("ojhakehar4@gmail.com")
                .password("test123")
                .build();

        userRepo.save(user);

        Assertions.assertThat(user.getId()).isGreaterThan(0);
    }

    @Test
    @Order(2)
    public  void getUserTest(){
        User userGet= userRepo.findById(1).get();
        Assertions.assertThat(userGet.getId()).isEqualTo(1);
    }

    @Test
    @Order(3)
    public void getListOfUserTest(){
        List<User> users = userRepo.findAll();
        Assertions.assertThat(users.size()).isGreaterThan(0);
    }

    @Test
    @Order(4)
    @Rollback(value = false)
    public void updateUserTest(){
        User user = userRepo.findById(1).get();
        user.setEmail("keharojha96@gmail.com");
        User userUpdated =  userRepo.save(user);

        Assertions.assertThat(userUpdated.getEmail()).isEqualTo("keharojha96@gmail.com");
    }

    @Test
    @Order(5)
    @Rollback(value = false)
    public void deleteUserTest(){
        User user = userRepo.findById(1).get();
        userRepo.delete(user);

        User user1 = null;
        Optional<User> opUser = userRepo.findByEmail("keharojha96@gmail.com");
        if(opUser.isPresent()){
            user1 = opUser.get();
        }
        Assertions.assertThat(user1).isNull();
    }


}