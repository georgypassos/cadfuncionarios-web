import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../funcionario';
import { FuncionarioService } from '../../funcionario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  funcionario: Funcionario[] = [];
  displayedColumns: string[] = ['id', 'nome', 'dtNascimento', 'funcao', 'departamento', 'status'];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {

    this.funcionarioService.listarFuncionarios().subscribe((funcionario: Funcionario[]) => {
      this.funcionario = funcionario;
    });
    
  }

}
