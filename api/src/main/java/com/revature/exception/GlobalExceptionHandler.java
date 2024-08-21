package com.revature.exception;

import com.revature.model.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> exceptionHandling(UserAlreadyExistsException e) {

        ErrorResponse response = new ErrorResponse(HttpStatus.CONFLICT.value(), e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.CONFLICT);
    }


    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ErrorResponse> exceptionHandling(BadRequestException e) {

        ErrorResponse response = new ErrorResponse(HttpStatus.BAD_REQUEST.value(), e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UnauthorizedException.class)
    public ResponseEntity<ErrorResponse> exceptionHandling(UnauthorizedException e) {

        ErrorResponse response = new ErrorResponse(HttpStatus.UNAUTHORIZED.value(), e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> exceptionHandling(Exception e) {

        ErrorResponse response = new ErrorResponse(HttpStatus.BAD_REQUEST.value(), e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
}
