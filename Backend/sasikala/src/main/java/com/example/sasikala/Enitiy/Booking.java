package com.example.sasikala.Enitiy;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookings")
public class Booking {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String branch;
    private String salutation;
    private String firstName;
    private String lastName;
    private String email;
    private String mobile;
    private boolean bmwFinance;
    private boolean termsAccepted;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public String getSalutation() {
		return salutation;
	}
	public void setSalutation(String salutation) {
		this.salutation = salutation;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public boolean isBmwFinance() {
		return bmwFinance;
	}
	public void setBmwFinance(boolean bmwFinance) {
		this.bmwFinance = bmwFinance;
	}
	public boolean isTermsAccepted() {
		return termsAccepted;
	}
	public void setTermsAccepted(boolean termsAccepted) {
		this.termsAccepted = termsAccepted;
	}
	
	
	
	
}
