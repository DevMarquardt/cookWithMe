import { Component } from "@angular/core";

interface Receita{
  usuario: string
  usuarioQuePostou: string
  nome: string
  ingrediente: string
  passoApasso: string
  imgUrl: string
  videoUrl: string
}

interface Comentario{
  fotoUsuario: string;
  usuarioQueComentou: string;
  comentario: string;
  nota: number;
  receita: string;
  receitaUser: string;
}

interface Usuario {
  nome: string;
  email: string;
  senha: string;
  foto: string;
}

@Component({
    templateUrl: 'paginaReceita.component.html',
    styleUrls: ['pgReceita.css']
})

export class paginaDaReceita{

    Usuario={
      nome: '',
      email: '',
      senha: '',
      foto: ''
    }

    Comentario={
      fotoUsuario: '',
      usuarioQueComentou: '',
      comentario: '',
      nota: 0,
      receita: '',
      receitaUser: ''
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
  comentarios : Comentario[] = []


  ngOnInit(): void {
    const receita = window.localStorage.getItem('receitaPagina') || '[]';
    this.receitaLogada = JSON.parse(receita);
    console.log(this.receitaLogada)

    const user = window.localStorage.getItem('logado') || '[]';
    this.Usuario = JSON.parse(user);

    const coment = window.localStorage.getItem('comentarios') || '[]';
    this.comentarios = JSON.parse(coment);

    const receitasFavoritas = window.localStorage.getItem('receitasFavoritas') || '[]';
    this.receitasFavoritas = JSON.parse(receitasFavoritas);

    this.receitasFavoritas.forEach(element => {
      if(element.nome === this.receitaLogada.nome && element.usuario === this.Usuario.email){
        this.heart = "../../assets/imagens/heart.png"
      }
      
    });

    const comentLog = window.localStorage.getItem('comentariosLogado') || '[]';
    this.comentariosLogado = JSON.parse(comentLog);

    this.comentarios.forEach(element => {
      if(element.receitaUser === this.receitaLogada.usuarioQuePostou && element.receita === this.receitaLogada.nome){
        this.comentariosLogado.push(element)
      }
    });
    

  }

  comentariosLogado : Comentario[] = []

  heart: any = "../../assets/imagens/heart-nocolor.png"
  contador: number = 0
  favorita():void{
    this.contador+=1
    let favoritas : Receita = {
    usuario: this.Usuario.email,
    usuarioQuePostou: this.receitaLogada.usuario,
    ingrediente: this.receitaLogada.ingrediente,
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

  ingredienteBol: boolean = false
  ingredienteOn():void{
    this.ingredienteBol = true
    this.passoBol = false
    this.comentBol = false

  }

  passoBol: boolean = false
  passoOn():void{
    this.passoBol = true
    this.ingredienteBol = false
    this.comentBol = false
  }
  
  comentBol: boolean = true
  comentOn():void{
    this.comentBol = true
    this.passoBol = false
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

  mostraMenuCat: boolean = false
  showCategorias():void{
    this.mostraMenuCat = !this.mostraMenuCat
    this.mostraMenuconfig = false
  }

  comentar():void{
    if(this.Comentario.comentario && this.Comentario.nota){
      const newComent : Comentario = {
        usuarioQueComentou: this.Usuario.email,
        fotoUsuario: this.Usuario.foto,
        comentario: this.Comentario.comentario,
        nota: this.Comentario.nota,
        receitaUser: this.receitaLogada.usuarioQuePostou,
        receita: this.receitaLogada.nome
      }
  
      this.comentarios.push(newComent)
      window.localStorage.setItem('comentarios', JSON.stringify(this.comentarios))
      this.ngOnInit()
    }
  }

  
}
