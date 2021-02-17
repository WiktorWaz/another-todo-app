import { Task } from './task';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataInput = '';
  textInput = '';
  title = 'another-todo-app';
  date = new Date();
  newTasks = 'Nie masz nowych zadań';
  oldTasks = 'Nie masz żadnych wykonanych zadań';
  removeButton = '<button class="removeButton">-</button>';

  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Basen',
      deadline: '2020-01-03',
      done: true,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];

  newTask() {
    const task: Task = {
      name: this.textInput,
      deadline: this.dataInput,
      done: false,
    };
    this.tasks.push(task);
    this.textInput = '';
    this.dataInput = '';
  } 

  removeAllTasks()  {
    this.tasks = [];
  }

  removeElement(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
  }
  taskDone(task: Task)  {
    task.done = true;
  }
  sortList()  {
 
    this.tasks = this.tasks.sort((a: Task, b: Task) => 
    a.done === b.done ? 0 : a.done ? 1 : -1
  );
   
  }

}
