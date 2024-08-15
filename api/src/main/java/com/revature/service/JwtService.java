package com.revature.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Map;
import java.util.function.Function;
import java.util.Date;

@Service
public class JwtService {

    @Value("${SECRET_KEY}")
    public String secretKey;

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
                   .claims()
                   .subject(userDetails.getUsername())
                   .issuedAt(new Date(System.currentTimeMillis()))
                   .expiration(
                       new Date(System.currentTimeMillis() + 1000 * 60 * 15))
                   .and()
                   .signWith(getSecretKey())
                   .compact();
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token,
                              Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public boolean isTokenValid(String token) {
        final String username = extractUsername(token);
        return username != null && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extractAllClaims(String token) {
        return (Claims) Jwts
                            .parser()
                            .verifyWith(getSecretKey())
                            .build()
                            .parse(token)
                            .getPayload();
    }

    private SecretKey getSecretKey() {
        String sha512Hash = generateSHA512Hash(secretKey);

        byte[] keyBytes = Decoders.BASE64.decode(sha512Hash);
        return Keys.hmacShaKeyFor(keyBytes);
    }


    private String generateSHA512Hash(String input) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-512");

            byte[] hashBytes = digest.digest(
                input.getBytes(StandardCharsets.UTF_8));

            StringBuilder sb = new StringBuilder();

            for (byte b : hashBytes) {
                sb.append(java.lang.String.format("%02x", b));
            }

            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-512 algorithm not found", e);
        }
    }
}
