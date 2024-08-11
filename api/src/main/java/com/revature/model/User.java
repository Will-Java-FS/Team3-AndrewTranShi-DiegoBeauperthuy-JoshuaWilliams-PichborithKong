package com.revature.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(nullable = false, unique = true, length = 255)
    private String username;

    @Column(nullable = false, length = 255)
    private String password;

    @Column(nullable = false, length = 100)
    private String role = "customer";

    @Column(nullable = false, name = "create_at")
    private LocalDateTime createAt = LocalDateTime.now();

    @Column(nullable = false, name = "update_at")
    private LocalDateTime updateAt = LocalDateTime.now();
}