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

@NgModule({
  declarations: [
    AppComponent,
    userComponent,
    userLoginComponent,
    ReceitaComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
