package com.app.pojos;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.cpk.OrderAndProductCPK;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "orders_details")
public class OrdersDetails {
	
	
	@JsonIgnore
	@EmbeddedId
	private OrderAndProductCPK cpk;
	
	@Column(length = 30,nullable=false)
	private Integer quantity;
	
	
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private LocalDateTime createdAt;
	                              	
	
	@JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "order_id", insertable = false, updatable = false)
    private Orders order;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn( name="product_id",nullable=false, insertable = false, updatable = false)
    private Product product;
    
    
//	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
//  private LocalDateTime modifiedAt;   
    
//	@Column(length = 30,nullable=false)
//	private Integer price;
	
//	@Column(length = 30,nullable=false)
//	private Double totalAmount;

}
