import { Component } from "@angular/core";

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
    styleUrls: ['./usuarioLogin.component.css']
})


export class userLoginComponent {


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
  
    logar(){
      this.usuarios.forEach(users => {
        if(users.senha === this.Usuario.senha && users.email === this.Usuario.email){
            localStorage.setItem('logado', JSON.stringify(users))
            window.location.replace("http://localhost:4200/Inicio")
            return true
          }
        }
      );
      return false
    }
}