package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.apache.tomcat.jni.User;

import com.app.enums.OrderStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Table(name = "orders")
public class Orders extends BaseEntity{
	
	@Column(name="total_amount" ,length = 20,nullable=false)
	private Double totalAmount;
	
	@Column(name = "order_date")
	private LocalDate orderDate;
	
	@Column(name = "order_status",length = 30 )
	@Enumerated(EnumType.STRING)
	private OrderStatus status;
	
	@Column(name = "total_item",length = 30)
	private Integer totalItem;
	
	@ManyToOne																																																				
	@JoinColumn(name ="user_Id" ,nullable=false)
	private Users userInOrder;

}
