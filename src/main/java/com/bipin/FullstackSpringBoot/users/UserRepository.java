package com.bipin.FullstackSpringBoot.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT s FROM Student s WHERE s.email = ?1")
    User findStudentByEmail(String email);
}