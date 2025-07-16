
CREATE DATABASE login_db;
USE login_db;


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);


select * from users;

CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  branch VARCHAR(50),
  salutation VARCHAR(10),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(100),
  mobile VARCHAR(15),
  bmw_finance BOOLEAN,
  terms_accepted BOOLEAN
);

select * from bookings;


CREATE TABLE contact(
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(10),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(100),
  mobile VARCHAR(15),
  model VARCHAR(100),
  city VARCHAR(100),
  terms BOOLEAN
);


select * from contact;


