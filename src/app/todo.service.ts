import { Injectable } from '@angular/core';
import {Task} from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasks: Task[] = [
    {
      id: 1,
      name: 'Todo 1',
      priority: 'alacsony',
      deadline: new Date('2025.01.05'),
      isCompleted: false,

    },
    {
      id: 2,
      name: 'Todo 2',
      priority: 'normál',
      deadline: new Date('2025.02.12'),
      isCompleted: false,

    },
    {
      id: 3,
      name: 'Todo 3',
      priority: 'magas',
      deadline: new Date('2025.03.07'),
      isCompleted: false,

    },
  ];

  constructor() { }

  deleteTask(itemToDelete:Task ) {
    let index = this.tasks.indexOf(itemToDelete);
    this.tasks.splice(index,1);
  }
}
