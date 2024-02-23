package com.bipin.FullstackSpringBoot.users;

import java.util.HashMap;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController 
@RequestMapping(path = "api/v1/user/") 
@AllArgsConstructor
public class UserController {
  private final UserService studentService;

  @PostMapping("register")
  public HashMap<String, Object> register(@Valid @RequestBody User user) {
    User userData = studentService.register(user);
    HashMap<String, Object> map = new HashMap<>();
    map.put("status", 200);
    map.put("message", "User registered successfully");
    map.put("user", userData);
    return map;
  }

  @PostMapping("login")
  public HashMap<String, Object> login(@Valid @RequestBody User user) {
   studentService.login(user);
    HashMap<String, Object> map = new HashMap<>();
    map.put("status", 200);
    map.put("message", "User logged in successfully");
    return map;
  }

  @GetMapping("get")
  public User getAllUsers(@RequestBody String email) {
    // HashMap<String, Object> map = new HashMap<>();
    // map.put("status", 200);
    // map.put("message", "All users");
    // map.put("users", );
    return studentService.getUserByEmail(email);
  }

}