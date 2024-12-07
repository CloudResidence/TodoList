import {Component, OnInit} from '@angular/core';
import {TodoService} from '../services/todo.service';
import {Task} from '../models/task';
import {FormControl, Validators, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-add-new-task',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css'
})
export class AddNewTaskComponent implements OnInit {

  formData!: FormGroup;

  constructor(public todoService: TodoService) {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required]),
      priority: new FormControl('normál', [Validators.required]),
      deadline: new FormControl('',)
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formData.valid) {
      this.todoService.addTask(this.formData.value);
      this.formData.reset();
      console.log('Mentve');
    }
  }

}
