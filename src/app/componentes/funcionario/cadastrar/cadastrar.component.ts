import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioService } from '../../funcionario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  form!: FormGroup
  
  constructor(private funcionarioService: FuncionarioService, private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.criarFormulario()
  }
  criarFormulario(): void{
    
    this.form = this.formBuilder.group({
        nome: [''],
        cpf: [''],
        datanascimento: [''],
        endereco: [''],
        contato: [''],
        funcao: [''],
        departamento: ['']
    })

  }

}
