package com.sonata.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.dao.Task;
import com.sonata.dao.impl.TaskDaoImpl;
import com.sonata.dao.impl.UserDaoImpl;

@RestController
public class RESTController {
	@Autowired
	TaskInterface task;
	//@GetMapping(value = "/task")
	@Autowired
	TaskDaoImpl dao;
	@Autowired
	UserInterface user;
	@Autowired
	UserDaoImpl dao1;
	
	//to get all tasks
	@RequestMapping(value = "/task", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> getAllTasks() {
		return task.getAllTasks();
	}
	// to set priority
	@RequestMapping(value="/Task_ID/{Task_ID}/Priority/{Priority}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTask(@PathVariable("Task_ID") int Task_ID, @PathVariable("Priority") String Priority, Model model) {
		model.addAttribute("Task_ID", Task_ID);
		model.addAttribute("priority", Priority);
		int row = task.setPriority(Task_ID, Priority);
		return task.getAllTasks();
	}
	//to set notes
	@RequestMapping(value="/Task_ID/{Task_ID}/Notes/{Notes}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTasks(@PathVariable("Task_ID") int Task_ID, @PathVariable("Notes") String Notes, Model model) {
		model.addAttribute("Task_ID", Task_ID);
		model.addAttribute("Notes", Notes);
		int row = task.setNotes(Task_ID, Notes);
		return task.getAllTasks();
	}
	//to set bookmarked
	@RequestMapping(value="/Task_ID/{Task_ID}/IsBookmarked/{IsBookmarked}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTasks1(@PathVariable("Task_ID") int Task_ID, @PathVariable("IsBookmarked") Boolean IsBookmarked, Model model) {
		model.addAttribute("Task_ID", Task_ID);
		model.addAttribute("IsBookmarked", IsBookmarked);
		int row = task.setBookmarked(Task_ID, IsBookmarked);
		return task.getAllTasks();
	}
	//search for a task
	@RequestMapping(value = "/Task_ID/{Task_ID}", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printtask(@PathVariable("Task_ID") int Task_ID) {
		return task.getTask(Task_ID);
	}
	//to check the status of all tasks
	@RequestMapping(value = "/Status/{Status}", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printStatusList(@PathVariable("Status") String Status) {
		return task.checkStatus(Status);
	}
	
	//asign task
	@RequestMapping(value = "/Owner_ID/{Owner_ID}/Task_ID/{Task_ID}", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> setTask(@PathVariable("Owner_ID") int Owner_ID, @PathVariable("Task_ID") int Task_ID) {
		int row =  task.assignTask(Owner_ID, Task_ID);
		return task.getTask(Task_ID);
	}
	
	//create a User
	@PostMapping(value = "/createUser", consumes = "application/json", produces = "application/json")
	public User createUser(@RequestBody User user) throws Exception{
		dao1.createUser(user);
		return user;
	}
	
	
	@PostMapping(value= "/addtask", consumes = "application/json", produces = "application/json")
	public Task addTask(@RequestBody Task task) throws Exception
	{
	   dao.addTask(task);
	   return task;

	}


}
