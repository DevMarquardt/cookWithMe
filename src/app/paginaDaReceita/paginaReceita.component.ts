import { Component } from "@angular/core";
import { stringify } from "@angular/core/src/util";

interface Receita{
  usuario: string
  usuarioQuePostou: string
  nome: string
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
      usuarioQuePostou: '',
      imgUrl: '',
      videoUrl: ''
    }

  receitaLogada: Receita
  logado: Usuario[] = []
  receitasFavoritas : Receita[] = []


  ngOnInit(): void {
    const receita = window.localStorage.getItem('receitaPagina') || '[]';
    this.receitaLogada = JSON.parse(receita);
    console.log(this.receitaLogada)

    const user = window.localStorage.getItem('logado') || '[]';
    this.Usuario = JSON.parse(user);

    const receitasFavoritas = window.localStorage.getItem('receitasFavoritas') || '[]';
    this.receitasFavoritas = JSON.parse(receitasFavoritas);


    console.log(this.Usuario);

  }

  heart: any = "../../assets/imagens/heart-nocolor.png"
  contador: number = 0
  favorita():void{
    this.contador+=1
    let favoritas : Receita = {
    usuario: this.Usuario.email,
    usuarioQuePostou: this.receitaLogada.usuario,
    nome: this.receitaLogada.nome,
    imgUrl: this.receitaLogada.imgUrl,
    videoUrl: this.receitaLogada.videoUrl
    
    }
    if(this.contador%2 === 1){
      this.heart = "../../assets/imagens/heart.png"
      this.receitasFavoritas.push(favoritas)
      window.localStorage.setItem('receitasFavoritas', JSON.stringify(this.receitasFavoritas))
    }else{
      this.heart = "../../assets/imagens/heart-nocolor.png"
      this.receitasFavoritas.splice(this.receitasFavoritas.indexOf(favoritas),1)
    }
  }
}
