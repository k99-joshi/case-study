package com.sonata.dao;
//import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.stereotype.Component;
//@XmlRootElement
@Component
public class Task {
	private int Task_ID;
	private int Owner_ID;
	private int Creator_ID;
	private String Name;
	private String Description;
	private String Status;
	private String Priority;
	private String Notes;
	private boolean IsBookmarked;
	private String Created_On;
	private String Status_Changed_On;
	public int getTask_ID() {
		return Task_ID;
	}
	public void setTask_ID(int task_ID) {
		Task_ID = task_ID;
	}
	public int getOwner_ID() {
		return Owner_ID;
	}
	public void setOwner_ID(int owner_ID) {
		Owner_ID = owner_ID;
	}
	public int getCreator_ID() {
		return Creator_ID;
	}
	public void setCreator_ID(int creator_ID) {
		Creator_ID = creator_ID;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	public String getPriority() {
		return Priority;
	}
	public void setPriority(String priority) {
		Priority = priority;
	}
	public String getNotes() {
		return Notes;
	}
	public void setNotes(String notes) {
		Notes = notes;
	}
	public boolean getIsBookmarked() {
		return IsBookmarked;
	}
	public void setIsBookmarked(boolean isBookmarked) {
		IsBookmarked = isBookmarked;
	}
	public String getCreated_On() {
		return Created_On;
	}
	public void setCreated_On(String created_On) {
		Created_On = created_On;
	}
	public String getStatus_Changed_On() {
		return Status_Changed_On;
	}
	public void setStatus_Changed_On(String status_Changed_On) {
		Status_Changed_On = status_Changed_On;
	}
	
			
	}

