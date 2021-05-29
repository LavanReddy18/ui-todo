import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  constructor(private service:SharedService) { }


  TaskList:any=[];

  ModalTitle:string;
  ActivateAddEditTaskComp:boolean=false;
  task:any;

  ngOnInit(): void {
  	this.refreshTaskList();

  }

  addClick(){

    this.task={
      task_id:0,
      title:"",
      module:"",
      description:"",
      st_date:"",
      ed_date:"",
    }
    this.ModalTitle = "Add Task";
    this.ActivateAddEditTaskComp=true;

  }

  editClick(item){
    this.task=item;
    this.ModalTitle="Edit Task"
    this.ActivateAddEditTaskComp=true;
    
  }

  deleteClick(item){
    if(confirm("Are you sure ??")){ 
      this.service.deleteTask(item.task_id).subscribe(data=>{
      alert(data.toString());
      this.refreshTaskList();
      })

    }
  }

  closeClick(){
    this.ActivateAddEditTaskComp=false;
    this.refreshTaskList();

  }
  date = new Date();
  refreshTaskList(){
  	this.service.getTaskList().subscribe(data=>{
  		this.TaskList=data;
  	});
  }

}
