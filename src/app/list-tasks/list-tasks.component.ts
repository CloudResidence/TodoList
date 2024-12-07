/**
 * Ez a komponens jeleníti meg a feladatok listáját,
 * a feladatokat a todoService getTask metódusából tölti be,
 *
 * A dátumot 'yyyy-MM-dd' formára alakítja
 *
 */
import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Task} from '../models/task';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-list-tasks',
  imports: [],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css'
})
export class ListTasksComponent implements OnInit {

  constructor(public todoService: TodoService) {
  }

  tasks: Task[] = [];
  completed: boolean = false;

  ngOnInit(): void {
    this.loadTasks();
  }

  onChange(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }

  deleteTask(index: number) {
    this.todoService.deleteTask(index);
    this.loadTasks();
  }

  dateFormat(date: string) {
    if (date != "") {
      return formatDate(date, 'yyyy-MM-dd', 'en-us');
    } else {
      return "";
    }
  }

  loadTasks() {
    this.tasks = this.todoService.getTasks();
  }
}
