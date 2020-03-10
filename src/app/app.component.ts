import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'MyChecklist';
  // buttonDisplay: string = "Task not added";
  buttonEnabled:boolean=false;

  constructor()
  {
    setTimeout(()=>{this.buttonEnabled=true},2000);
  }

  taskList=[];
  priorityList=[];

  
  taskName:string='';
  taskPriority:string='';
  numberOfTasks:number=0;
  // taskEntered:boolean=false;
  // priorityEntered:boolean=false;
  
  onAddTask(event:any){

    console.log(event);

    // this.buttonDisplay="Task Added";
    // this.taskEntered=true;
    // this.priorityEntered=true;
    
    if (this.taskName !="" && this.taskPriority!="")
    {
      this.taskList.push(this.taskName);
      this.priorityList.push(this.taskPriority);
    }

    else
    {alert ("Please enter required fields");}

    this.taskName ="";
    this.taskPriority="";
  
    
    this.numberOfTasks=this.priorityList.length;
    // this.taskList[1]=this.taskName;
    // this.priorityList[1]=this.taskPriority;


    //taskList.push(this.taskName);
    //priorityList.push(this.taskPriority);

    //console.log(taskList);
  }
  

}
