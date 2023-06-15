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
            localStorage.setItem(JSON.stringify('logado'), JSON.stringify(users))
            this.receitas.forEach(receitasFor => {
              if(receitasFor.usuario == users.email){
                localStorage.setItem('logadoReceita', JSON.stringify(receitasFor))
              }
            });

            return true
          }
        }
      );
      return false
    }
}