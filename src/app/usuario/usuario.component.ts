import { Component } from "@angular/core";

interface Usuario {
    nome: string;
    email: string;
    senha: string;
}

@Component({
    templateUrl: './usuario.component.html',
})


export class userComponent {
    usuarios: Usuario[] = []

    Usuario={
        nome: '',
        email: '',
        senha: ''
    }

    nome: string

    novoUser():void{
        if(!this.Usuario.nome || !this.Usuario.senha || this.Usuario.email){
          return
        }
        const user:Usuario ={
          nome: this.Usuario.nome,
          email: this.Usuario.email,
          senha: this.Usuario.senha
        }
        this.usuarios.push(user)
        
        this.Usuario.nome = null
        this.Usuario.email = null
        this.Usuario.senha = null
      }
}