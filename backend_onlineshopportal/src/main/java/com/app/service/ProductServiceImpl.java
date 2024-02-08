package com.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ProductDao;
import com.app.dao.UserDao;
import com.app.dto.AddProductDto;
import com.app.pojos.Product;
import com.app.pojos.Users;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductDao  productDao;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private UserDao userDao;
	
	
	@Override	
	public List<Product> FindAllProduct() {
		
		return productDao.findAll();
	}
	
}
