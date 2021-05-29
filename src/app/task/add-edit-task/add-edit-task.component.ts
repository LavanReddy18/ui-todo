import { Component, OnInit, Input } from '@angular/core';
import{ SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() task:any;
  task_id:string;
  title:string;
  module:string;
  description:string;
  st_date:string;
  ed_date:string;

  ngOnInit(): void {
	this.task_id=this.task.task_id;
	this.title=this.task.title;
	this.module=this.task.module;
	this.description=this.task.description;
	this.st_date=this.task.st_date;
	this.ed_date=this.task.ed_date;
  }

  addTask(){
  	let val = {
  				title:this.title,
  				module:this.module,
  				description:this.description,
  				st_date:this.st_date,
  				ed_date:this.ed_date,
  	};
  	this.service.addTask(val).subscribe(res=>{
  	alert(res.toString());
  	});
  }

  updateTask(){
  	let val = {task_id:this.task_id,
  				title:this.title,
  				module:this.module,
  				description:this.description,
  				st_date:this.st_date,
  				ed_date:this.ed_date};
  	this.service.updateTask(val).subscribe(res=>{
  	alert(res.toString());
  	});

  }

}
