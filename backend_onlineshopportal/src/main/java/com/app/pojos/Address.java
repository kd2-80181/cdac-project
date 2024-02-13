package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Entity
@Table(name="address")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Address extends BaseEntity {
	
	
	
	@Column(length=255,unique=true,nullable=false)
	private String houseFlatNo;
	
	@Column(length=255,unique=true,nullable=false)
	private String streetName;
	
	@Column(length=20 ,nullable=false)
	private String city;
	
	@Column(length=20 ,nullable=false)
	private String country;
	
	@Column(length=10,unique=true,nullable=false)
	private String postalCode;
	
	@Column(length=10,unique=true,nullable=false)
	private int phoneNo;
	
	
	@OneToOne
	@JoinColumn(name = "user_id",nullable=false)
	private Users user;
	

}
