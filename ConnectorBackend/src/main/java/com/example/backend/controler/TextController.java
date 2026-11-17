package com.example.backend.controler;

import org.springframework.web.bind.annotation.*;

@RestController
// Marks this class as a REST API controller
// Tells Spring Boot that this class handles HTTP requests.

@RequestMapping("/modify-text")
// Sets the API URL to localhost:8080/modify-text
//  This sets the API endpoint (so the frontend will send data to http://localhost:8080/modify-text)

public class TextController {

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    // This handles POST requests
    // This tells Spring Boot to accept POST requests.

    public String modifyText(@RequestBody String text) {
        return "This was sent by Spring Boot.\n\n" + text;
    }
}

