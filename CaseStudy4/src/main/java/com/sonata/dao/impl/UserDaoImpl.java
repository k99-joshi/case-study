package com.sonata.dao.impl;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mysql.jdbc.PreparedStatement;
import com.sonata.dao.User;
import com.sonata.dao.UserInterface;

@Component
public class UserDaoImpl implements UserInterface{
	@Autowired
	DbConnection db;
	int row = 0;
	@Autowired
	User user = null;
	
	@Override
	public int createUser(User user) {
		try {
			PreparedStatement ps = (PreparedStatement) db.getConnection().prepareStatement("Insert into User values (?,?,?,?,?,?,?,?,?,?,?)");
			ps.setInt(1, user.getUser_Id());
			ps.setString(2, user.getPassword());
			ps.setString(3, user.getUsername());
			ps.setString(4, user.getEmail());
			ps.setString(5, user.getFirst_Name());
			ps.setString(6, user.getLast_Name());
			ps.setLong(7, user.getContact_Number());
			ps.setString(8, user.getRole());
			ps.setBoolean(9, user.getIsactive());
			ps.setString(10, user.getDob());
			ps.setString(11, user.getCreated_on());
			row = ps.executeUpdate();
			db.closeConnection();
		}catch(SQLException sqe) {sqe.printStackTrace();}
		
		return row;
	}
	
	

}
