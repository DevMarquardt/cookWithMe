import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { PaginaInicialComponent } from "../paginaInicial/paginaInicial.component";
import { AppRoutingModule } from "../routing.module";

interface Usuario {
    nome: string;
    email: string;
    senha: string;
}

interface Receita{
  usuario: string
  nome: string
  ingrediente: string
  passoApasso: string
  comentario: string
}



@Component({
    templateUrl: 'usuarioLogin.component.html',
})


export class userLoginComponent {

  constructor(private router: Router) { }
    usuarios: Usuario[] = []

    Usuario={
        nome: '',
        email: '',
        senha: ''
    }

    Receita={
      usuario: '',
      nome: '',
      ingrediente: '',
      passoApasso: '',
      comentario: ''
    }

    receitas: Receita[] = []

    ngOnInit(): void {
      const user = window.localStorage.getItem('registrados') || '[]';
        this.usuarios = JSON.parse(user);
    }
  
    logar(event){
      this.usuarios.forEach(users => {
        if(users.senha === this.Usuario.senha && users.email === this.Usuario.email){
            localStorage.setItem('logado', JSON.stringify(users))
            this.router.navigate(['/Inicio'])
            return true
          }
        }
      );
      return false
    }
}