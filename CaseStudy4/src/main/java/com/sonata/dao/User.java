package com.sonata.dao;

import org.springframework.stereotype.Component;

@Component
public class User {
	private int User_Id;
	private String Password;
	private String Username;
	private String Email;
	private String First_Name;
	private String Last_Name;
	private long Contact_Number;
	private String Role;
	private boolean Isactive;
	private String Dob;
	private String Created_on;
	public int getUser_Id() {
		return User_Id;
	}
	public void setUser_Id(int user_Id) {
		User_Id = user_Id;
	}
	public String getUsername() {
		return Username;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getFirst_Name() {
		return First_Name;
	}
	public void setFirst_Name(String first_Name) {
		First_Name = first_Name;
	}
	public String getLast_Name() {
		return Last_Name;
	}
	public void setLast_Name(String last_Name) {
		Last_Name = last_Name;
	}
	public long getContact_Number() {
		return Contact_Number;
	}
	public void setContact_Number(long contact_Number) {
		Contact_Number = contact_Number;
	}
	public String getRole() {
		return Role;
	}
	public void setRole(String role) {
		Role = role;
	}
	public boolean getIsactive() {
		return Isactive;
	}
	public void setIsactive(boolean isactive) {
		Isactive = isactive;
	}
	public String getDob() {
		return Dob;
	}
	public void setDob(String dob) {
		Dob = dob;
	}
	public String getCreated_on() {
		return Created_on;
	}
	public void setCreated_on(String created_on) {
		Created_on = created_on;
	}

}
