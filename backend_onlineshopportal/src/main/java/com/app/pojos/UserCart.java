package com.app.pojos;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.cpk.UserAndProductCPK;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "User_cart")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class UserCart  {
   
	@EmbeddedId
	private UserAndProductCPK cpk;
	
	
	@Column(nullable=false)
	private int quatity;
	
	@Column(name = "added_at")
	private LocalDateTime addeddAt;
		
	

//	@Column(name = "remove_at" ,length = 20)
//	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
//	private LocalDateTime removeAt;	
	
	@ManyToOne
	@JoinColumn(name = "user_id",nullable=false, insertable = false, updatable = false)
	private Users userInCart;
	
	@ManyToOne
	@JoinColumn(name = "product_id",nullable=false, insertable = false, updatable = false)
     private Product product;	
	
}
