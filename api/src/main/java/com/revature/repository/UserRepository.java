package com.revature.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Custom query method to find a user by username
    Optional<User> findByUsername(String username);

}
