package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.AddProductDto;
import com.app.pojos.Product;

public interface ProductService {

	List<Product> FindAllProduct();

	
}
