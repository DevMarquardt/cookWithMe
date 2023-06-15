import { Component } from "@angular/core";

interface Receita{
  usuario: string
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
}

@Component({
    templateUrl: 'paginaInicial.component.html',
    styleUrls: ['paginaInicial.component.css']
})

export class PaginaInicialComponent{


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
      senha: ''
    }

    Receita={
      usuario:'',
      nome: '',
      ingrediente: '',
      passoApasso: '',
      comentario: '',
      imgUrl: '',
      videoUrl: ''
    }

  receitas: Receita[] = []
  usuarios: Usuario[] = []
  slide: Receita[] = []



  ngOnInit(): void {
    const receita = window.localStorage.getItem('receitas') || '[]';
    this.receitas = JSON.parse(receita);

    const user = window.localStorage.getItem('logado') || '[]';
    this.Usuario = JSON.parse(user);

    const user2 = window.localStorage.getItem('registrados') || '[]';
    this.usuarios = JSON.parse(user2);

    var m = this.receitas.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = this.receitas[m];
      this.receitas[m] = this.receitas[i];
      this.receitas[i] = t;
    }

    localStorage.setItem('receitas', JSON.stringify(this.receitas))

    for (let index = 0; index < 4; index++) {
      this.slide[index] = this.receitas[index];
    }

  }

}