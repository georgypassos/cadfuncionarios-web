import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './componentes/funcionario/listar/listar.component';
import { EntrarComponent } from './componentes/funcionario/entrar/entrar.component';
import { CadastrarComponent } from './componentes/funcionario/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
