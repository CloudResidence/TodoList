import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListTasksComponent} from './list-tasks/list-tasks.component';
import {AddNewTaskComponent} from './add-new-task/add-new-task.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListTasksComponent,AddNewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoApp';
}
