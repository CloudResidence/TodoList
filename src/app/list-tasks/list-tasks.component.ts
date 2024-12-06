import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Task} from '../models/task';

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
}
