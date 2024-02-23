package com.bipin.FullstackSpringBoot.users;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor

public class User{

  @Id
  @SequenceGenerator(name = "student_sequence", sequenceName = "student_sequence", allocationSize = 1)
  @GeneratedValue(generator = "student_sequence", strategy = GenerationType.SEQUENCE)
  private Long Id;

  @NotBlank
  @Column(nullable = false)
  private String name;

  @NotBlank
  @Column(nullable = false)
  private String password;

  @Email
  @Column(nullable = false, unique = true)
  private String email;

  public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}