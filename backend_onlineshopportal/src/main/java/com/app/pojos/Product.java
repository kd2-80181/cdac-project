package com.app.pojos;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.enums.ProductCategory;
import com.app.enums.ProductType;
import com.app.enums.Product_size;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Product extends BaseEntity {
	
	@Column(length = 255,nullable=false)
	private String description;
	
	@Column(name = "product_price",length = 30,nullable=false)
	private Double price;
	
	@Column(name="product_quantity",length = 30)
	private Integer quantity;
	
	@Column(name = "product_category",length = 30 )
	@Enumerated(EnumType.STRING)
	private ProductCategory ProductCategory;
	
	@Column(name = "product_type",length = 30 )
	@Enumerated(EnumType.STRING)
	private ProductType productType;
	

	@Column(name = "product_size",length = 30 )
	@Enumerated(EnumType.STRING)
	private Product_size productSize;
	
	@Column(length = 30)
	private String brand;
	
	@Column(length = 30)
	private Double discount;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private LocalDateTime createdAt;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private LocalDateTime modifiedAt;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private LocalDateTime DeletedAt;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "seller_id",nullable=false)
	private Users seller;
	
	
	//bi  directional association
	
//	@OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
//	List<OrdersDetails> orderList=new ArrayList<>();
//	
	
	

}
