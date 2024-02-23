package com.bipin.FullstackSpringBoot.users;

import org.springframework.stereotype.Service;

import com.bipin.FullstackSpringBoot.users.exception.NotFoundException;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
class UserService {
  private final UserRepository userRepository;

  public User register(User user) {
    User exits = userRepository.findStudentByEmail(user.getEmail());
    if (exits != null) {
      throw new NotFoundException("Email already registered!");
    }
    return userRepository.save(user);
  }

  public Boolean login(User user) {
    User exits = userRepository.findStudentByEmail(user.getEmail());
    if (exits == null) {
      throw new NotFoundException("No user found with those credentials!");
    }
    if (!exits.getPassword().equals(user.getPassword())) {
      throw new NotFoundException("Invalid credentials!");
    }
    return true;
  }
  public User getUserByEmail(String email) {
    User exits = userRepository.findStudentByEmail(email);
    if (exits == null) {
      throw new NotFoundException("No user found with those credentials!");
    }
    return exits;
  }

}