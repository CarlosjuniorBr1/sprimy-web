// src/app/modules/projeto/projeto.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ProjetoDetailsComponent } from './projeto-details/projeto-details.component';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ProjetoDetailsComponent,
    ProjetoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class ProjetoModule { }
