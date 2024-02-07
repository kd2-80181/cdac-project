package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.cpk.UserAndProductCPK;
import com.app.pojos.UserCart;

public interface CartItemDao extends JpaRepository<UserCart, UserAndProductCPK> {

	List<UserCart> findAllByUserInCartId(Long userid);

}
