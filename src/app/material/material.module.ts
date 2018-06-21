import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [ CommonModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule ],
  exports: [ MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule ]
})
export class MaterialModule { }
