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

      sair(){
        localStorage.setItem('logado', JSON.stringify(null))
        window.location.replace('http://localhost:4200/registrar')
  }

  receitasUsuario: Receita[] = []
  receitasOcultas: Receita[] = []

  ocultarReceitas(){
    let contador = 0
    const receita2 = window.localStorage.getItem('receitas') || '[]';
    if(receita2 != '[]'){
        this.receitasOcultas = JSON.parse(receita2);

        this.receitas.forEach(element => {
          if(element.usuario === this.Usuario.email){
            element.oculta = true
            this.receitasOcultas.push(element)
            this.receitasUsuario.push(element)
          }
        });
        localStorage.setItem('receitasOcultas', JSON.stringify(this.receitas))
    
        while(this.receitasUsuario.length > 0){
          this.receitas.forEach((element, index) => {
            if(element.usuario === this.Usuario.email){
                this.receitas.splice(index, 1)
                this.receitasUsuario.splice(index, 1)
            }
            index+=1
          });
        }
        
        localStorage.setItem('receitas', JSON.stringify(this.receitas))
      }
    }

  TirarOcultarReceitas(){
    let contador = 0
    const receita2 = window.localStorage.getItem('receitasOcultas') || '[]';
    this.receitasOcultas = JSON.parse(receita2);

    this.receitasOcultas.forEach(element => {
      if(element.usuario === this.Usuario.email){
        element.oculta = false
        this.receitas.push(element)
      }
    });
    localStorage.setItem('receitas', JSON.stringify(this.receitas))

    while(this.receitasOcultas.length > 0){
      this.receitasOcultas.forEach((element, index) => {
        if(element.usuario === this.Usuario.email){
            this.receitasOcultas.splice(index, 1)
        }
        index+=1
      });
    }

  localStorage.setItem('receitasOcultas', JSON.stringify(this.receitasOcultas))


  }



}