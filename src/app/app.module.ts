import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { userComponent } from './registro/usuario.component';
import { userLoginComponent } from './login/usuariologin.component';
import { ReceitaComponent } from './addReceita/addReceita.component';
import { PaginaInicialComponent } from './paginaInicial/paginaInicial.component';
import { Router, RouterModule } from '@angular/router';
import { paginaDaReceita } from './paginaDaReceita/paginaReceita.component';
import { favoritasComponent } from './paginaFavoritas/favoritas.component';
import { perfilComponent } from './geral/perfil.component';
import { pgPerfilComponent } from './perfil/pgperfil.component';
import { pesquisaComponent } from './Pesquisa/pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    userComponent,
    userLoginComponent,
    ReceitaComponent,
    PaginaInicialComponent,
    paginaDaReceita,
    favoritasComponent,
    perfilComponent,
    pgPerfilComponent,
    pesquisaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
