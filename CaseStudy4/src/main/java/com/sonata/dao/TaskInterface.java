package com.sonata.dao;

import java.util.List;

public interface TaskInterface {
	//public int save(Object object);
	public  List<Task> getAllTasks();
	public int setPriority(int Task_ID, String Priority);
	public int setNotes(int Task_ID, String Notes);
	public int setBookmarked(int Task_ID, Boolean IsBookmarked);
	

}
