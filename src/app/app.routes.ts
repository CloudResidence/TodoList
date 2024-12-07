import {Routes} from '@angular/router';
import {AddNewTaskComponent} from './add-new-task/add-new-task.component';
import {ListTasksComponent} from './list-tasks/list-tasks.component';

export const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'addtask', component: AddNewTaskComponent},
  {path: 'list', component: ListTasksComponent},
];
