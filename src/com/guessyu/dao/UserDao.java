package com.guessyu.dao;

import javax.annotation.Resource;

import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.guessyu.entity.User;

/**
* @author 作者 jamen.chen
* @E-mail:122741482@qq.com
* @version 创建时间：2015年12月22日 下午9:40:12
* 类说明
*/
@Repository("userDao")
public class UserDao {
	@Resource
	private HibernateTemplate hibernateTemplate;
	
	public void add(User u){
		System.out.println("UserDao.add()");
		hibernateTemplate.save(u);
	}

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}
	
}