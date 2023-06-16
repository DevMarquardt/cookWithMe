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

@NgModule({
  declarations: [
    AppComponent,
    userComponent,
    userLoginComponent,
    ReceitaComponent,
    PaginaInicialComponent,
    paginaDaReceita
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
