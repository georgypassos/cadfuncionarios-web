import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  readonly baseUrl = "http://localhost:8100/api/public/funcionarios"

  readonly authenticateUrl ="http://localhost:8100/authenticate"

  constructor(private http: HttpClient) {}

  cadastrarFuncionario(funcionario: Funcionario){
      return this.http.post<Funcionario>(this.baseUrl, funcionario)
  }

  listarFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.baseUrl)
  }

  logarFuncionario(usuario: String, senha: String): Observable<any> {
    return this.http.post<any>(this.authenticateUrl, {username: usuario, password: senha})
  }

}
