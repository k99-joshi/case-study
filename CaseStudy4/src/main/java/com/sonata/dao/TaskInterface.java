package com.sonata.dao;

import java.util.List;

public interface TaskInterface {
	//public int save(Object object);
	public  List<Task> getAllTasks();
	public int setPriority(int Task_ID, String Priority);
	public int setNotes(int Task_ID, String Notes);
	public int setBookmarked(int Task_ID, Boolean IsBookmarked);
	public List<Task> getTask(int Task_ID);
	public List<Task> checkStatus(String Status);
	public int assignTask(int Owner_ID, int Task_ID);
	

}
