import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DetalharComponent } from './componentes/funcionario/detalhar/detalhar.component';
import { EditarComponent } from './componentes/funcionario/editar/editar.component';
import { CadastrarComponent } from './componentes/funcionario/cadastrar/cadastrar.component';
import { ListarComponent } from './componentes/funcionario/listar/listar.component';
import { EntrarComponent } from './componentes/funcionario/entrar/entrar.component';

import { FooterComponent } from './componentes/template/footer/footer.component';
import { HeaderComponent } from './componentes/template/header/header.component';
import { NavComponent } from './componentes/template/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DetalharComponent,
    EditarComponent,
    CadastrarComponent,
    ListarComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
