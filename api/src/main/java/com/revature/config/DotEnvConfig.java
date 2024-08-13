package com.revature.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.github.cdimascio.dotenv.Dotenv;

@Configuration
public class DotEnvConfig {

    @Bean
    public Dotenv dotenv() {
        return Dotenv.configure()
                .directory(System.getProperty("user.dir")) // Ensures the working directory is used
                .filename(".env")
                .load();
    }
}
