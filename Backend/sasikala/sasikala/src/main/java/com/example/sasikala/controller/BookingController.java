package com.example.sasikala.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sasikala.Enitiy.Booking;
import com.example.sasikala.dto.BookingRepo;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

	
	@Autowired
    private BookingRepo bookingRepo;

    @PostMapping
    public Booking saveBooking(@RequestBody Booking booking) {
        return bookingRepo.save(booking);
    }
	
    
    
    
	
}
