package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Users;

public interface UserDao extends JpaRepository<Users, Long> {

	Optional<Users> findByEmail(String email);	
	

}
