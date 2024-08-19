package com.revature.config;

import com.revature.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtAuthFilter jwtAuthFilter;

    @Autowired
    private JwtAuthEntryPoint jwtAuthEntryPoint;

    @Bean
    public SecurityFilterChain securityFilterChain(
        HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
            .addFilterBefore(jwtAuthFilter,
                             UsernamePasswordAuthenticationFilter.class)
            .authorizeHttpRequests(
//                req -> req.requestMatchers("/api/users/register")
//                          .permitAll()
//                          .requestMatchers("/api/users/login")
//                          .permitAll()
//                          .requestMatchers(HttpMethod.GET, "/api/menus/**")
//                          .permitAll()
//                          .requestMatchers(HttpMethod.GET, "api/users")
//                          .hasRole(Role.ADMIN.name())
//                          .requestMatchers("api/menus")
//                          .hasRole(Role.ADMIN.name())
//                          .requestMatchers(HttpMethod.GET,"api/orders")
//                          .hasAnyRole(Role.ADMIN.name(), Role.STAFF.name())
//                          .anyRequest()
//                          .authenticated()
                req -> req.anyRequest().permitAll()
            )
            .sessionManagement(
                session -> session.sessionCreationPolicy(STATELESS))
            .exceptionHandling(
                ex -> ex.authenticationEntryPoint(jwtAuthEntryPoint));

        return http.build();
    }

//    @Bean
//    public UserDetailsService userDetailsService() {
//        UserDetails user = User.withUsername("demo")
//                .password(passwordEncoder().encode("password"))
//                .authorities("ROLE_USER")
//                .build();
//
//        return new InMemoryUserDetailsManager(user);
//    }
}
