import { Component } from "@angular/core";
import { stringify } from "@angular/core/src/util";

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
}

@Component({
    templateUrl: 'paginaReceita.component.html',
    styleUrls: ['pgReceita.css']
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

    this.receitasFavoritas.forEach(element => {
      if(element.nome === this.receitaLogada.nome && element.usuario === this.Usuario.email){
        this.heart = "../../assets/imagens/heart.png"
      }
      
    });

  }

  heart: any = "../../assets/imagens/heart-nocolor.png"
  contador: number = 0
  favorita():void{
    this.contador+=1
    let favoritas : Receita = {
    usuario: this.Usuario.email,
    usuarioQuePostou: this.receitaLogada.usuario,
    ingrediente: this.receitaLogada.ingrediente,
    comentario: this.receitaLogada.comentario,
    passoApasso: this.receitaLogada.passoApasso,
    nome: this.receitaLogada.nome,
    imgUrl: this.receitaLogada.imgUrl,
    videoUrl: this.receitaLogada.videoUrl
    
    }
    let contador2 = 0
    let verificaSeTemOutraIgual: boolean = true

    this.receitasFavoritas.forEach(element => {
      if(element.nome === favoritas.nome && element.usuario === favoritas.usuario){
          this.receitasFavoritas.splice(contador2,1)
          verificaSeTemOutraIgual = false
      }
      contador2+=1
    });

    if(verificaSeTemOutraIgual){
      this.heart = "../../assets/imagens/heart.png"
      this.receitasFavoritas.push(favoritas)
      window.localStorage.setItem('receitasFavoritas', JSON.stringify(this.receitasFavoritas))
    }else{
      this.heart = "../../assets/imagens/heart-nocolor.png"
      window.localStorage.setItem('receitasFavoritas', JSON.stringify(this.receitasFavoritas))
    }
  }

  ingredienteBol: boolean = true
  ingredienteOn():void{
    this.ingredienteBol = !this.ingredienteBol
    this.passoBol = false

  }

  passoBol: boolean = false
  passoOn():void{
    this.passoBol = !this.passoBol
    this.ingredienteBol = false
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
