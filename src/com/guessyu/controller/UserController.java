package com.guessyu.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.guessyu.service.UserService;

/**
* @author 作者 jamen.chen
* @E-mail:122741482@qq.com
* @version 创建时间：2015年12月22日 下午9:42:03
* 类说明
*/
@Controller("userController")
@RequestMapping("/user.do")     
public class UserController  {

	@Resource
	private UserService userService;
	
	@RequestMapping(params="method=reg") 
	public String reg(String uname) {
		System.out.println("HelloController.handleRequest()");
		userService.add(uname); 
		return "index";
	}
	
	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	
}