package com.guessyu.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
* @author 作者 jamen.chen
* @E-mail:122741482@qq.com
* @version 创建时间：2015年12月22日 下午9:37:47
* 类说明
*/
@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class User {
	@Id
	//@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String uname;
	private String pwd;
	
	
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	
	
}
