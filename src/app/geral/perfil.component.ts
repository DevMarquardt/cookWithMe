import { Component } from "@angular/core";


interface Usuario {
    nome: string;
    email: string;
    senha: string;
    foto: string;
}

interface ReceitaFav {
    usuario: string
    usuarioQuePostou: string
    nome: string
    ingrediente: string
    passoApasso: string
    comentario: string
    imgUrl: string
    videoUrl: string
}

interface Receita{
    usuario: string
    nome: string
    ingrediente: string
    passoApasso: string
    comentario: string
    imgUrl: string
    videoUrl: string
    categoria: string
    oculta: boolean
  }

@Component({
    templateUrl: 'perfilGeral.html',
    styleUrls: ['perfil.css']
})

export class perfilComponent {

    imageUrl: any;

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

    Usuario = {
        nome: '',
        email: '',
        senha: '',
        foto: ''
    }

    Receita = {
        usuario: '',
        nome: '',
        ingrediente: '',
        passoApasso: '',
        comentario: '',
        imgUrl: '',
        videoUrl: ''
    }

    ReceitaFav = {
        usuario: '',
        nome: '',
        usuarioQuePostou: '',
        ingrediente: '',
        passoApasso: '',
        comentario: '',
        imgUrl: '',
        videoUrl: ''
    }

    UserAntigo: Usuario

    usuarios: Usuario[] = []
    receitasFav: ReceitaFav[] = []
    receitas: Receita[] = []


    novoUser(Csenha): void {

        const user3 = window.localStorage.getItem('logado') || '[]';
        this.UserAntigo = JSON.parse(user3);

        if (Csenha !== this.Usuario.senha) {
            alert("As senhas não coincidem")
            return
        }

        this.Usuario.foto = this.imageUrl
        

        this.usuarios.forEach(element => {
            if (element.email == this.UserAntigo.email) {
                console.log(this.UserAntigo.email)
                element.nome = this.Usuario.nome
                element.email = this.Usuario.email
                element.senha = this.Usuario.senha
                element.foto = this.UserAntigo.foto
            }
        });

        this.receitas.forEach(element => {
            if (element.usuario == this.UserAntigo.email) {
                element.usuario = this.Usuario.email
            }
        });


        this.receitasFav.forEach(element => {
            if (element.usuarioQuePostou == this.UserAntigo.email) {
                element.usuario = this.Usuario.email
                element.usuarioQuePostou = this.Usuario.email
            }
        });

        localStorage.setItem("logado", JSON.stringify(this.Usuario))
        localStorage.setItem("receitas", JSON.stringify(this.receitas))
        localStorage.setItem("registrados", JSON.stringify(this.usuarios))
        localStorage.setItem("receitasFavoritas", JSON.stringify(this.receitasFav))
        alert('Recadastrado')
        this.Usuario.nome = null
        this.Usuario.email = null
        this.Usuario.senha = null
        Csenha = null
    }

    ngOnInit(): void {

        const user = window.localStorage.getItem('logado') || '[]';
        this.Usuario = JSON.parse(user);

        const user2 = window.localStorage.getItem('registrados') || '[]';
        this.usuarios = JSON.parse(user2);

        const receita = window.localStorage.getItem('receitasFavoritas') || '[]';
        this.receitasFav = JSON.parse(receita);

        const receita2 = window.localStorage.getItem('receitas') || '[]';
        this.receitas = JSON.parse(receita2);

    }

    desligaCard(event){
        if(event.x > 607 && event.y > 60 || event.y > 20 && event.x < 497){
          this.mostraMenuconfig = false
          this.mostraMenuCat = false
        }
      }
    
      mostraMenuconfig: boolean = false
    
      showMenuconfig():void{
        this.mostraMenuconfig = !this.mostraMenuconfig
        this.mostraMenuCat = false
      }
    
      mostraMenuCat; boolean = false
      showCategorias():void{
        this.mostraMenuCat = !this.mostraMenuCat
        this.mostraMenuconfig = false
      }

}