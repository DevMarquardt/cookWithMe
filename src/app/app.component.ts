import { Component } from '@angular/core';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookWithMe';

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
    passoApasso: '',
    comentario: '',
    imgUrl: '',
    videoUrl: '',
    categoria: '',
    oculta: false
  }

  receitas: Receita[] = []

  usuarios: Usuario[] = []
}
