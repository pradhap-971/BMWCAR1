package com.example.sasikala.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sasikala.Enitiy.Contact;
import com.example.sasikala.dto.ContactRepo;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

	@Autowired
    private ContactRepo contactRepo;

    @PostMapping
    public Contact saveContact(@RequestBody Contact request) {
        return contactRepo.save(request);
    }
	
	
}
