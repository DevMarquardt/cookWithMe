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
    templateUrl: 'paginaReceita.component.html',
})

export class paginaDaReceita{

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
  logado: Usuario[] = []


  ngOnInit(): void {
    const receita = window.localStorage.getItem('receitas') || '[]';
    this.receitas = JSON.parse(receita);

    const user = window.localStorage.getItem('logado') || '{}';
    this.Usuario = JSON.parse(user);

    console.log(this.Usuario);

  }

  salvarReceita(){
    if(!this.Receita.nome || !this.Receita.ingrediente || !this.Receita.passoApasso){
      return
    }

  }

}