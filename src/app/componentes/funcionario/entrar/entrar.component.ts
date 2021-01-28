import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FuncionarioService } from '../../funcionario.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})

export class EntrarComponent implements OnInit {

  form!: FormGroup

  constructor(private funcionarioService: FuncionarioService, private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.criarFormulario()
  }
  criarFormulario(): void{
    
    this.form = this.formBuilder.group({
        nome: [''],
        senha: ['']
    })

  }

  logarUsuario(): void{
    this.funcionarioService.logarFuncionario(this.form.value['nome'], this.form.value['senha'])
    .subscribe(tokenRecebido => {
      localStorage.setItem('token', tokenRecebido)
    });

    this.route.navigate(['/'])
  }

}
