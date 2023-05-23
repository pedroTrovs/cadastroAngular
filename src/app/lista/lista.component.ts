import { EstudanteService } from './../estudante.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  formGroupEstudante : FormGroup;
  lista: Estudante[] = [];

  constructor (private service: EstudanteService, formBuilder: FormBuilder){
    this.formGroupEstudante = formBuilder.group({
      id : [''],
      nome : [''],
      curso : [''],
      semestre : [''],
      periodo : ['']
    });
  }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.service.getAll().subscribe(
      {
          next:  data =>  this.lista = data,
          error: msg  => console.log("Erro ao chamar o endpoint " + msg)
      }
    )
}

  add() {
    this.service.add(this.formGroupEstudante.value).subscribe({
      next: data => {
        this.lista.push(data);
        this.formGroupEstudante.reset();
      }
    });
  }
}
