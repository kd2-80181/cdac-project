package com.app.dto;


import javax.validation.constraints.NotBlank;

import com.app.enums.ProductCategory;
import com.app.enums.ProductType;
import com.app.enums.Product_size;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class AddProductDto {
	
	@JsonProperty(access = Access.READ_ONLY) // this property only used during ser.
	private Long id;
	
	
	private String description;

	private Double price;
    
	private Integer quantity;
    
	private ProductCategory ProductCategory;

	private ProductType productType;
    
	private Product_size productSize;
	
	@NotBlank(message = "brand is must")
	private String brand;


	private Double discount;
	
	private Long seller_id;
}
