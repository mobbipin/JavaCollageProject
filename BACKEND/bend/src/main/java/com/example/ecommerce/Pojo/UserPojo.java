package com.example.ecommerce.Pojo;
import com.example.ecommerce.Entity.User;

import jakarta.validation.constraints.NotEmpty;
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
public class UserPojo {
    private Integer id;

    @NotEmpty(message = "email cannot be empty")
    private String email;
    @NotEmpty(message = "fullname cannot be empty")
    private  String fullname;
    @NotEmpty(message = "password cannot be empty")
    private  String password;



    public UserPojo(User user) {
        this.id=user.getId();
        this.email=user.getEmail();
        this.fullname=user.getFullname();
        this.password=user.getPassword();
    }
}
