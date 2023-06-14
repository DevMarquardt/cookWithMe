import { Component } from "@angular/core";

interface Usuario {
    nome: string;
    email: string;
    senha: string;
    Csenha: string
}

@Component({
    templateUrl: 'usuario.component.html',
    styleUrls: ['./usuario.component.css']
})


export class userComponent {
    usuarios: Usuario[] = []

    Usuario={
        nome: '',
        email: '',
        senha: '',
        Csenha: ''
    }

    nome: string

    novoUser():void{
      if(!this.Usuario.senha || !this.Usuario.nome || !this.Usuario.email){
        return
      }
      if(this.Usuario.Csenha !== this.Usuario.senha){
        alert("As senhas não coincidem")
        return
      }
        const user:Usuario ={
          nome: this.Usuario.nome,
          email: this.Usuario.email,
          senha: this.Usuario.senha,
          Csenha: this.Usuario.Csenha
        }
        this.usuarios.push(user)
        this.Usuario.nome = null
        this.Usuario.email = null
        this.Usuario.senha = null
        this.Usuario.Csenha = null
      }
}