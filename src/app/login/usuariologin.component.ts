import { Component } from "@angular/core";

interface Usuario {
    nome: string;
    email: string;
    senha: string;
    Csenha: string
}

@Component({
    templateUrl: 'usuarioLogin.component.html',
})


export class userLoginComponent {
    usuarios: Usuario[] = []

    Usuario={
        nome: '',
        email: '',
        senha: '',
        Csenha: ''
    }

    nome: string
  
    Logar(){
      this.usuarios.forEach(users => {
        if(users.senha === this.Usuario.senha && users.senha === this.Usuario.senha){
          return true
        }
      });
      return false
    }
}