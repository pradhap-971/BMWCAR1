package com.example.sasikala.dto;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sasikala.Enitiy.Contact;

public interface ContactRepo extends JpaRepository<Contact, Integer> {

}
