package com.revature.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.exception.BadRequestException;
import com.revature.exception.UnauthorizedException;
import com.revature.exception.UserAlreadyExistsException;
import com.revature.model.AuthResponse;
import com.revature.model.User;
import com.revature.service.JwtService;
import com.revature.service.UserService;

@RestController
//@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/api/users")
@CrossOrigin(origins = "${CLIENT_URL}")
public class UserController {

    private final UserService userService;

    private JwtService jwtService;

    @Autowired
    public UserController(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginUser(
            @RequestBody User loginRequest) {
        // Check if username or password is empty
        if (loginRequest.getUsername() == null || loginRequest.getUsername()
                .trim()
                .isEmpty()) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username cannot be empty");
            throw new BadRequestException("Username cannot be empty");
        }

        if (loginRequest.getPassword() == null || loginRequest.getPassword()
                .trim()
                .isEmpty()) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Password cannot be empty");
            throw new BadRequestException("Password cannot be empty");
        }

        // Authenticate user
        Optional<User> user = userService.findByUsername(
                loginRequest.getUsername());

        if (user.isPresent() && userService.checkPassword(
                loginRequest.getPassword(), user.get().getPassword())) {

            String token = jwtService.generateToken(user.get());
            AuthResponse response = new AuthResponse(token,
                    user.get().getUsername(),
                    user.get().getRole().name(),
                    user.get().getUserId(),
                    "Login successful");
            return ResponseEntity.ok(response);
        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            throw new UnauthorizedException("Invalid username or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> createUser(@RequestBody User user) {
        // Check if username or password is empty
        if (user.getUsername() == null || user.getUsername().trim().isEmpty()) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                                 .body("Username cannot be empty");
            throw new BadRequestException("Username cannot be empty");
        }

        if (user.getPassword() == null || user.getPassword().trim().isEmpty()) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                                 .body("Password cannot be empty");
            throw new BadRequestException("Password cannot be empty");
        }

        // Check if the username already exists
        if (userService.existsByUsername(user.getUsername())) {
//            return ResponseEntity.status(HttpStatus.CONFLICT)
//                                 .body("Username already taken");
            throw new UserAlreadyExistsException("Username already taken");
        }

        User savedUser = userService.save(user);
        String token = jwtService.generateToken(savedUser);
        AuthResponse response = new AuthResponse(token,
                savedUser.getUsername(),
                savedUser.getRole().name(),
                savedUser.getUserId(),
                "Register successful");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id,
            @RequestBody User user) {
        if (!userService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        user.setUserId(id);
        User updatedUser = userService.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        boolean isDeleted = userService.deleteUserById(id);
        if (isDeleted) {
            return ResponseEntity.ok("User deleted successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Error: Cannot find user with ID " + id);
        }
    }
}
