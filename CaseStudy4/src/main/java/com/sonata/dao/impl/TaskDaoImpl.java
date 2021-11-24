package com.sonata.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sonata.dao.Task;
import com.sonata.dao.TaskInterface;
@Component
public class TaskDaoImpl implements TaskInterface {
	int row = 0;
	@Autowired
	DbConnection db;
	@Autowired
	Task task = null;
	//@Override
	/*public int save(Object object) {
		
		try {
			 task = (Task)object;
			Object db = null;
			PreparedStatement ps = ((DbConnection) db).getConnection().prepareStatement
					("insert into Task values(?,?,?,?,?,?,?,?,?,?,?)");
			ps.setInt(1, task.getTask_ID());
			ps.setInt(2, task.getOwner_ID());
			ps.setInt(3, task.getCreator_ID());
			ps.setString(4, task.getName());
			ps.setString(5, task.getDescription());
			ps.setString(6, task.getStatus());
			ps.setString(7, task.getPriority());
			ps.setString(8, task.getNotes());
			ps.setBoolean(9, task.isIsBookmarked());
			ps.setString(10, task.getCreated_On());
			ps.setString(11, task.getStatus_Changed_On());
			
			row = ps.executeUpdate();
			((DbConnection) db).closeConnection();
		}catch(SQLException e) { e.printStackTrace();}
		return row;
	}*/
	
	@Override
	public List<Task> getAllTasks(){
		List<Task> taskList = new ArrayList<>();
		try {
			PreparedStatement ps1 = db.getConnection().prepareStatement
					("select * from Task");
			ResultSet rs = ps1.executeQuery();
			while(rs.next()) {
				Task t = new Task();
				int Task_ID = rs.getInt(1);
				int Owner_ID = rs.getInt(2);
				int Creator_ID = rs.getInt(3);
				String Name = rs.getString(4);
				String Description = rs.getString(5);
				String Status = rs.getString(6);
				String Priority = rs.getString(7);
				String Notes = rs.getString(8);
				Boolean IsBookmarked = rs.getBoolean(9);
				String Created_On = rs.getString(10);
				String Status_Changed_On = rs.getString(11);
				
				t.setTask_ID(Task_ID);
				t.setOwner_ID(Owner_ID);
				t.setCreator_ID(Creator_ID);
				t.setName(Name);
				t.setDescription(Description);
				t.setStatus(Status);
				t.setPriority(Priority);
				t.setNotes(Notes);
				t.setIsBookmarked(IsBookmarked);
				t.setCreated_On(Created_On);
				t.setStatus_Changed_On(Status_Changed_On);
				taskList.add(t);
				
			}	
		}catch(SQLException se) { se.printStackTrace();}
		return taskList;
	}
	
	@Override
	public List<Task> getTask(int Task_ID){
		List<Task> taskList = new ArrayList<>();
		try {
			PreparedStatement ps1 = db.getConnection().prepareStatement
					("select * from Task where Task_ID=?");
			ps1.setInt(1, Task_ID);
			ResultSet rs = ps1.executeQuery();
			while(rs.next()) {
				Task t = new Task();
				//int Task_ID = rs.getInt(1);
				int Owner_ID = rs.getInt(2);
				int Creator_ID = rs.getInt(3);
				String Name = rs.getString(4);
				String Description = rs.getString(5);
				String Status = rs.getString(6);
				String Priority = rs.getString(7);
				String Notes = rs.getString(8);
				Boolean IsBookmarked = rs.getBoolean(9);
				String Created_On = rs.getString(10);
				String Status_Changed_On = rs.getString(11);
				
				t.setTask_ID(Task_ID);
				t.setOwner_ID(Owner_ID);
				t.setCreator_ID(Creator_ID);
				t.setName(Name);
				t.setDescription(Description);
				t.setStatus(Status);
				t.setPriority(Priority);
				t.setNotes(Notes);
				t.setIsBookmarked(IsBookmarked);
				t.setCreated_On(Created_On);
				t.setStatus_Changed_On(Status_Changed_On);
				taskList.add(t);
				
			}	
		}catch(SQLException se) { se.printStackTrace();}
		return taskList;
	
	}
	
	@Override
	public int setPriority(int Task_ID, String Priority) {
		try {
			 
			 PreparedStatement ps = db.getConnection().prepareStatement("update Task set Priority = ? where Task_ID = ?");
			 ps.setString(1, Priority);
			 ps.setInt(2, Task_ID);
			 row = ps.executeUpdate();
			 db.closeConnection();
			 
		 }catch(SQLException sqe) {sqe.printStackTrace();}
		 
		return row;

	}
	
	@Override
	public int setNotes(int Task_ID, String Notes) {
		try {
			PreparedStatement ps = db.getConnection().prepareStatement("update Task set Notes =? where Task_ID = ?");
			ps.setString(1, Notes);
			ps.setInt(2, Task_ID);
			row = ps.executeUpdate();
			db.closeConnection();
		}catch(SQLException sqe) {sqe.printStackTrace();}
		
		return row;
	}
	
	@Override
	public int setBookmarked(int Task_ID, Boolean IsBookmarked) {
		try {
			PreparedStatement ps = db.getConnection().prepareStatement("update Task set IsBookmarked =? where Task_ID = ?");
			ps.setBoolean(1, IsBookmarked);
			ps.setInt(2, Task_ID);
			row = ps.executeUpdate();
			db.closeConnection();
		}catch(SQLException sqe) {sqe.printStackTrace();}
		
		return row;
		
	}
	
	@Override
	public List<Task> checkStatus(String Status) {
		List<Task> taskList = new ArrayList<>();
		try {
			PreparedStatement ps1 = db.getConnection().prepareStatement
					("select * from Task where Status=?");
			ps1.setString(1, Status);
			ResultSet rs = ps1.executeQuery();
			while(rs.next()) {
				Task t = new Task();
				int Task_ID = rs.getInt(1);
				int Owner_ID = rs.getInt(2);
				int Creator_ID = rs.getInt(3);
				String Name = rs.getString(4);
				String Description = rs.getString(5);
				//String Status = rs.getString(6);
				String Priority = rs.getString(7);
				String Notes = rs.getString(8);
				Boolean IsBookmarked = rs.getBoolean(9);
				String Created_On = rs.getString(10);
				String Status_Changed_On = rs.getString(11);
				
				t.setTask_ID(Task_ID);
				t.setOwner_ID(Owner_ID);
				t.setCreator_ID(Creator_ID);
				t.setName(Name);
				t.setDescription(Description);
				t.setStatus(Status);
				t.setPriority(Priority);
				t.setNotes(Notes);
				t.setIsBookmarked(IsBookmarked);
				t.setCreated_On(Created_On);
				t.setStatus_Changed_On(Status_Changed_On);
				taskList.add(t);
				
			}	
		}catch(SQLException se) { se.printStackTrace();}
		return taskList;
		
	}
	
	@Override
	public int assignTask(int Owner_ID, int Task_ID) {
		try {
			PreparedStatement ps = db.getConnection().prepareStatement("update Task set Owner_ID =? where Task_ID = ?");
			ps.setInt(1, Owner_ID);
			ps.setInt(2, Task_ID);
			row = ps.executeUpdate();
			db.closeConnection();
		}catch(SQLException sqe) {sqe.printStackTrace();}
		
		return row;
		
	}
	
	
	
	
	public int addTask(Task task) {
		try {
			 PreparedStatement ps = db.getConnection().prepareStatement("Insert into task values(?,?,?,?,?,?,?,?,?,?,?)");
			 ps.setInt(1, task.getTask_ID());
			 ps.setInt(2, task.getOwner_ID());
			 ps.setInt(3, task.getCreator_ID());
			 ps.setString(4, task.getName());
			 ps.setString(5, task.getDescription());
			 ps.setString(6, task.getStatus());
			 ps.setString(7, task.getPriority());
			 ps.setString(8, task.getNotes());
			 ps.setBoolean(9, task.getIsBookmarked());
			 ps.setString(10, task.getCreated_On());
			 ps.setString(11, task.getStatus_Changed_On());
			 row = ps.executeUpdate();
			 db.closeConnection();
		}catch(SQLException e) {System.out.println(e);}
		
		return row;
		
	}
	
	

}
