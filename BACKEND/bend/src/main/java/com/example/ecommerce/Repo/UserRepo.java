package com.example.ecommerce.Repo;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.ecommerce.Entity.User;

@Repository
    public interface UserRepo extends JpaRepository<User, Integer> {
    @Query(value = "select * from users where email=?1", nativeQuery = true)
    Optional<User> findByEmail(String email);

    @Query(value = "select COUNT(*) from users", nativeQuery = true)
    Long countAllRows();

    @Query(value = "SELECT COUNT(*) FROM users WHERE created_at >= ?1", nativeQuery = true)
    Long countByDateAfter(LocalDate date);
    }


