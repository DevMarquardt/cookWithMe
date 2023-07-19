import { Component } from "@angular/core";


interface Usuario {
    nome: string;
    email: string;
    senha: string;
    foto: string;
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
    templateUrl: 'privacidade.html',
    styleUrls: ['privacidade.css']
})

export class privacidadeComponent {

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
        videoUrl: '',
        oculta: false
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
    receitas: Receita[] = []

    ngOnInit(): void {

        const user = window.localStorage.getItem('logado') || '[]';
        this.Usuario = JSON.parse(user);

        const user2 = window.localStorage.getItem('registrados') || '[]';
        this.usuarios = JSON.parse(user2);

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

      sair(){
        localStorage.setItem('logado', JSON.stringify(null))
        window.location.replace('http://localhost:4200/registrar')
  }

  receitasUsuario: Receita[] = []
  receitasOcultas: Receita[] = []

  ocultarReceitas(){
    const receita2 = localStorage.getItem('receitas') || '[]';
    const receita = localStorage.getItem('receitasOcultas') || '[]';
    this.receitasOcultas = JSON.parse(receita);
    this.receitas = JSON.parse(receita2);

    for (let i = this.receitas.length - 1; i >= 0; i--) {
      if(this.receitas[i].usuario === this.Usuario.email){
        let element = this.receitas[i]
        console.log(element)
        this.receitasOcultas.push(element)
        this.receitas.splice(i, 1);
        localStorage.setItem('receitasOcultas',JSON.stringify(this.receitasOcultas))
        localStorage.setItem('receitas', JSON.stringify(this.receitas))
      }
    }


  }

  TirarOcultarReceitas(){

    const receita = localStorage.getItem('receitasOcultas') || '[]';
    const receita2 = localStorage.getItem('receitas') || '[]';
    this.receitas = JSON.parse(receita2);
    if(receita != '[]'){
      this.receitasOcultas = JSON.parse(receita);

      for (let i = this.receitasOcultas.length - 1; i >= 0; i--) {

        if(this.receitasOcultas[i].usuario === this.Usuario.email){
          if(this.receitasOcultas[i].usuario === this.Usuario.email){
            let element = this.receitasOcultas[i]
            this.receitas.push(element)
            this.receitasOcultas.splice(i, 1);
            localStorage.setItem('receitasOcultas', JSON.stringify(this.receitasOcultas))
            localStorage.setItem('receitas', JSON.stringify(this.receitas))
          }
        }
      }
    }
    
  }



}