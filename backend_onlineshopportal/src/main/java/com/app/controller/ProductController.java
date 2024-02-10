package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddProductDto;
import com.app.pojos.Product;
import com.app.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	
	// any one should be able view the products
	@GetMapping("/view")
	public ResponseEntity<?> viewProducts() {
		 List<Product> productList= productService.FindAllProduct();
		return  ResponseEntity.status(HttpStatus.OK).body(productList);
	}
	
	// any authenticated user should be able to browse the categories
		@GetMapping("/browse_categories/{category}")
		public ResponseEntity<?> browseCategories(@PathVariable String category) {
			
			return null;
		}
		
		// customer should be able to purchase products
		@GetMapping("/purchase")
		public String purchaseProducts() {
			return "customer should be able to purchase products";
		}

		// admin should be able to add the products
		@PostMapping("/add")
		public ResponseEntity<?> addProducts(@RequestBody @Valid AddProductDto dto) {
			String msg="added failed !!";
		      Product product=productService.addProduct(dto);
		      if(product!=null) 
		      {
		    	  msg="added succefully";
		      }
			
			return ResponseEntity.status(HttpStatus.OK).body(msg);
		}
		
		@GetMapping("/delete/{product_id}")
		public ResponseEntity<?> deleteProducts(@PathVariable Long product_id) {
		String msg="product delete failed !!";
		if(productService.deleteByProductId(product_id)) 
		{
			msg="product deleted succefully !!";
			return ResponseEntity.status(HttpStatus.OK).body(msg);
		}
		
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(msg);
	}
}
