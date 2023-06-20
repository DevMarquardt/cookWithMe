import { Component } from "@angular/core";

interface Usuario {
    nome: string;
    email: string;
    senha: string;
    foto: string;
}

@Component({
    templateUrl: 'usuario.component.html',
    styleUrls: ['./usuario.component.css']
})


export class userComponent {
    Csenha: string
    usuarios: Usuario[] = []

    Usuario={
        nome: '',
        email: '',
        senha: '',
        foto: ''
    }

    ngOnInit(): void {
      const user = window.localStorage.getItem('registrados') || '[]';
        this.usuarios = JSON.parse(user);
    }

    nome: string
    novoUser(Csenha):void{
      let verificaUsuariosIguais: boolean = true
      this.usuarios.forEach(element => {
        if(element.email === this.Usuario.email && element.nome === element.email){
          verificaUsuariosIguais = false
        }
      });

      if(verificaUsuariosIguais){
        if(!this.Usuario.senha || !this.Usuario.nome || !this.Usuario.email){
          return
        }
        if(Csenha !== this.Usuario.senha){
          alert("As senhas não coincidem")
          return
        }
          const user:Usuario ={
            nome: this.Usuario.nome,
            email: this.Usuario.email,
            senha: this.Usuario.senha,
            foto: ''
          }
          this.usuarios.push(user)
          localStorage.setItem("registrados", JSON.stringify(this.usuarios))
          alert('cadastrado')
          this.Usuario.nome = null
          this.Usuario.email = null
          this.Usuario.senha = null
          this.Csenha = null
          window.location.replace("http://localhost:4200/login")
        }
      }
}