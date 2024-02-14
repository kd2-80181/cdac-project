package com.app.service;

import java.util.List;

import javax.validation.Valid;

import com.app.dto.AddProductDto;
import com.app.pojos.Product;

public interface ProductService {

	List<Product> FindAllProduct();

	Product addProduct(@Valid AddProductDto dto);

	boolean deleteByProductId(Long id);
}
