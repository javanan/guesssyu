package com.guessyu.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.guessyu.dao.UserDao;
import com.guessyu.entity.User;

/**
 * @author 作者 jamen.chen
 * @E-mail:122741482@qq.com
 * @version 创建时间：2015年12月22日 下午9:41:02 类说明
 */
@Service("userService")
public class UserService {
	@Resource
	private UserDao userDao;

	@Transactional
	public void add(String uname) {
		System.out.println("UserService.add()");
		User u = new User();
		u.setUname(uname);
		userDao.add(u);
	}

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

}