package com.example.ecommerce.Services.Impl;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.ecommerce.Entity.User;
import com.example.ecommerce.Pojo.UserPojo;
import com.example.ecommerce.Repo.UserRepo;
import com.example.ecommerce.Services.UserServices;
import com.example.ecommerce.config.PasswordEncoderUtil;
import com.example.ecommerce.exception.AppException;

import lombok.RequiredArgsConstructor;



@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserServices {
    private  final UserRepo userRepo;

    @Override
    public UserPojo save(UserPojo userPojo) {
        User user;
        if (userPojo.getId() != null) {
            user = userRepo.findById(userPojo.getId()).orElseThrow(() -> new RuntimeException("Not Found"));
        } else {
            user = new User();
        }
        user.setEmail(userPojo.getEmail());
        user.setFullname(userPojo.getFullname());
        user.setPassword(PasswordEncoderUtil.getInstance().encode(userPojo.getPassword()));

//
        userRepo.save(user);
        return new UserPojo(user);
    }
//

    @Override
    public User findByEmail(String email) {
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new AppException("Invalid User email", HttpStatus.BAD_REQUEST));
        return user;
    }


    @Override
    public User findBYId(Integer id) {
        User user= userRepo.findById(id).orElseThrow(()->new RuntimeException("not found"));
        user=User.builder()
                .id(user.getId())
                .fullname(user.getFullname())
                .email(user.getEmail())
                .build();
        return user;
    }

//
//    @Override
//    public List<User> findAll() {
//        return findAllInList(userRepo.findAll());
//    }
//
//    public List<User> findAllInList(List<User> list) {
//        Stream<User> allJobsWithImage = list.stream().map(user ->
//                User.builder()
//                        .id(user.getId())
//                        .birthday(user.getBirthday())
//                        .fullname(user.getFullname())
//                        .email(user.getEmail())
//                        .gender(user.getGender())
//                        .build()
//        );
//        list = allJobsWithImage.toList();
//        return list;
//    }


}
