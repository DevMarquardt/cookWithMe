import { Component } from "@angular/core";

interface Receita{
    usuario: string
    usuarioQuePostou: string
    nome: string
    ingrediente: string
    passoApasso: string
    comentario: string
    imgUrl: string
    videoUrl: string
  }

interface Usuario {
  nome: string;
  email: string;
  senha: string;
  foto: string;
}

@Component({
    templateUrl: 'favoritas.html',
    styleUrls: ['favoritas.css']
})

export class favoritasComponent{


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

  videoUrl: any;

  onFileSelectedVideo(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.videoUrl = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

    Usuario={
      nome: '',
      email: '',
      senha: '',
      foto: ''
    }

    Receita={
        usuario:'',
        nome: '',
        ingrediente: '',
        usuarioQuePostou: '',
        passoApasso: '',
        comentario: '',
        imgUrl: '',
        videoUrl: ''
      }

  receitas: Receita[] = []
  usuarios: Usuario[] = []
  slide: Receita[] = []



  ngOnInit(): void {
    const receita = window.localStorage.getItem('receitasFavoritas') || '[]';
    this.receitas = JSON.parse(receita);

    const user = window.localStorage.getItem('logado') || '[]';
    this.Usuario = JSON.parse(user);

    this.receitas.forEach(element => {
        if(element.usuario === this.Usuario.email){
            this.slide.push(element)
        }
    });

  }

  salvaImagem(img){
    window.localStorage.setItem('receitaPagina', JSON.stringify(img))
    window.location.replace("http://localhost:4200/Receita")
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