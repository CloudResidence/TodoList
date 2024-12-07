import {Injectable} from '@angular/core';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private storageKey = 'tasks';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      const defaultTasks: Task[] = [
        {
          id: 1,
          name: 'Todo 1',
          priority: 'alacsony',
          deadline: '2025.01.05',
          isCompleted: false,

        },
        {
          id: 2,
          name: 'Todo 2',
          priority: 'normál',
          deadline: '2025.02.12',
          isCompleted: false,

        },
        {
          id: 3,
          name: 'Todo 3',
          priority: 'magas',
          deadline: '2025.03.07',
          isCompleted: false,

        },
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(defaultTasks));
    }
  }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  deleteTask(index: number): void {
    const tasks = this.getTasks();
    tasks.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  addTask(task: Task) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}
