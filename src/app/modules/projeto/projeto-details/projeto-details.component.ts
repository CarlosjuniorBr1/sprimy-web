import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projeto-details',
  templateUrl: './projeto-details.component.html',
  styleUrls: ['./projeto-details.component.scss']
})
export class ProjetoDetailsComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      nome: ['', Validators.required],
      data_entrega: ['', Validators.required],
      objetivo: ['',]
    });
  }
  ngOnInit(): void {
    
  }

  submit() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value);
      // Aqui você pode enviar os dados pro backend ou serviço
    }
  }
}
