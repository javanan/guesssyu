package com.guessyu.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
* @author 作者 jamen.chen
* @E-mail:122741482@qq.com
* @version 创建时间：2015年11月4日 下午5:14:42
* 类说明 
*/
@Controller
@RequestMapping("/link")
public class LinkTest {

	@RequestMapping("/link")
	public void link(){
		System.out.println("hh");
	}
}
