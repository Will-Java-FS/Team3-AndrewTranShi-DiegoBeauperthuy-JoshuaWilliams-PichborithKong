package com.revature.model;

public record AuthResponse(
    String token,
    String username,
    String role,
    String message
) {}