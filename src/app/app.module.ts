import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { userComponent } from './registro/usuario.component';
import { userLoginComponent } from './login/usuariologin.component';

@NgModule({
  declarations: [
    AppComponent,
    userComponent,
    userLoginComponent
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
