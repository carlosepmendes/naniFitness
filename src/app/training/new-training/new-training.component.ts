import { TrainingService } from './../training.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises: Exercise[] = [];
  @Output() trainingStart = new EventEmitter<void>();

  constructor(private training: TrainingService) { }

  ngOnInit() {
    this.exercises = this.training.getAvailableExercises();
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
