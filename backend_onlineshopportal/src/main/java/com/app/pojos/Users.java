package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.enums.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user")
public class Users extends BaseEntity {
	
	
	@Column(length = 30,name = "first_name",nullable = false)
	private String firstName;
	
	@Column(length = 50,name = "last_name",nullable = false)
	private String lastName;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private UserRole role;
	
	@Column(length = 30,nullable = false,unique = true)
	private String email;
	
	@Column(length = 300, nullable = false)
	private String password;
	
	@Column(name = "phone_no" ,length = 20,unique = true,nullable=false)
	private String phoneNo;
	
	@Column(name = "aadhar_no" )
	private String aadharNo;
	
	@Column(name = "pan_no" )
	private String panNo;
	
	@Column(name = "gst_no")
	private String gstNo;
	
	@Column(name = "created_at" ,length = 20)
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private LocalDateTime createdAt;
	
	@Column(name = "modified_at")
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private LocalDateTime ModifiedAt;
	
	@Column(name = "remove_at")
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private LocalDateTime RemoveAt;

	
	@OneToMany(mappedBy = "seller", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
	List<Product> product=new ArrayList<>(); 
	
//	
//	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
//	List<UserCart> userCarts=new ArrayList<UserCart>(); 
	
//	@OneToMany(mappedBy = "userInAddress", cascade = CascadeType.ALL, orphanRemoval = true)
//	private List<Address> addressList = new ArrayList<Address>();

}
