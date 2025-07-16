package com.example.sasikala.dto;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sasikala.Enitiy.Booking;



public interface BookingRepo extends JpaRepository<Booking, Integer> {

}
