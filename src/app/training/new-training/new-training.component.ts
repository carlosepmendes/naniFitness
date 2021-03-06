import { NgForm } from '@angular/forms';
import { TrainingService } from './../training.service';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises: Exercise[] = [];

  constructor(private training: TrainingService) { }

  ngOnInit() {
    this.exercises = this.training.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.training.startExercise(form.value.exercise);
  }

}
