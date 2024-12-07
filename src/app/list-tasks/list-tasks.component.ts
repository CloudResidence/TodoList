import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Task} from '../models/task';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-list-tasks',
  imports: [],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css'
})
export class ListTasksComponent implements OnInit{

  constructor(public todoService: TodoService) {
  }
  //@Input() taskInput!: Task;

  task!: Task;
  completed: boolean = false;

  ngOnInit(): void {
  }

  onChange() {
    this.completed = !this.completed;
    this.task.isCompleted = !this.task.isCompleted;
  }

  deleteTask(itemToDelete: Task) {
    this.task = itemToDelete;
    this.todoService.deleteTask(itemToDelete);
  }
  dateFormat(date:Date) {
     return formatDate(date,'yyyy-MM-dd','en-us');
  }
}
