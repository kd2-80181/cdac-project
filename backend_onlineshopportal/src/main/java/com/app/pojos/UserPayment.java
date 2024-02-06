package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.app.enums.PaymentType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Table(name = "user_payment")
public class UserPayment extends BaseEntity {

	@Enumerated(EnumType.STRING)
	@Column(length=25,name="payment_type")
	private PaymentType type;
	
	@OneToOne
	@JoinColumn(name = "user_id",nullable=false)
	private Users userId;
	
	@Column(length=20,nullable=false)
	private String provider;
	
	@Column(length=20,unique=true,nullable=false)
	private int AccNo ;
	
	@Column(length=20,unique=true,nullable=false)
	private LocalDate ExpDate ;
	
	@Column(length=20,unique=true,nullable=false)
	private LocalDate PaymentDate ;

}
