package com.app.cpk;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderAndProductCPK implements Serializable {
	
	
	@Column(name = "order_id")
	private Long orderId;
	
	@Column(name = "product_id")
	private Long productId;
	
	
	
	@Override
	public int hashCode() {
		return Objects.hash(productId, orderId);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OrderAndProductCPK other = (OrderAndProductCPK) obj;
		return Objects.equals(productId, other.productId) && Objects.equals(orderId, other.orderId);
	}

}
