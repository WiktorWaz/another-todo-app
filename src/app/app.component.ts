import { Task } from './task';
import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faCheck = faCheck;
  faTrash = faTrash;
  dataInput = '';
  textInput = '';
  title = 'another-todo-app';
  date = new Date();
  newTasks = 'Nie masz nowych zadań';
  oldTasks = 'Nie masz żadnych wykonanych zadań';
  tasks: Task[] = [];

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

  removeAllTasks() {
    this.tasks = [];
  }

  removeElement(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
  }
  taskDone(task: Task) {
    task.done = true;
  }
  sortList() {

    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );

  }

}
