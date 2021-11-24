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

@RestController
public class RESTController {
	@Autowired
	TaskInterface task;
	//@GetMapping(value = "/task")
	@Autowired
	TaskDaoImpl dao;
	
	@RequestMapping(value = "/task", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> getAllTasks() {
		return task.getAllTasks();
	}
	
	@RequestMapping(value="/Task_ID/{Task_ID}/Priority/{Priority}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTask(@PathVariable("Task_ID") int Task_ID, @PathVariable("Priority") String Priority, Model model) {
		model.addAttribute("Task_ID", Task_ID);
		model.addAttribute("priority", Priority);
		int row = task.setPriority(Task_ID, Priority);
		return task.getAllTasks();
	}
	
	@RequestMapping(value="/Task_ID/{Task_ID}/Notes/{Notes}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTasks(@PathVariable("Task_ID") int Task_ID, @PathVariable("Notes") String Notes, Model model) {
		model.addAttribute("Task_ID", Task_ID);
		model.addAttribute("Notes", Notes);
		int row = task.setNotes(Task_ID, Notes);
		return task.getAllTasks();
	}
	
	@RequestMapping(value="/Task_ID/{Task_ID}/IsBookmarked/{IsBookmarked}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTasks1(@PathVariable("Task_ID") int Task_ID, @PathVariable("IsBookmarked") Boolean IsBookmarked, Model model) {
		model.addAttribute("Task_ID", Task_ID);
		model.addAttribute("IsBookmarked", IsBookmarked);
		int row = task.setBookmarked(Task_ID, IsBookmarked);
		return task.getAllTasks();
	}
	
	
	
	
	@PostMapping(value= "/addtask", consumes = "application/json", produces = "application/json")
	public Task addTask(@RequestBody Task task) throws Exception
	{
	   dao.addTask(task);
	   return task;

	}


}
