import { Component } from "@angular/core";

interface Receita {
  usuario: string
  usuarioQuePostou: string
  nome: string
  ingrediente: string
  passoApasso: string
  imgUrl: string
  videoUrl: string
}

interface Comentario {
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
  adm: boolean;
}

@Component({
  templateUrl: 'paginaReceita.component.html',
  styleUrls: ['pgReceita.css']
})

export class paginaDaReceita {

  Usuario = {
    nome: '',
    email: '',
    senha: '',
    foto: '',
    adm: false
  }

  Comentario = {
    fotoUsuario: '',
    usuarioQueComentou: '',
    comentario: '',
    nota: 0,
    receita: '',
    receitaUser: ''
  }

  Receita = {
    usuario: '',
    nome: '',
    usuarioQuePostou: '',
    imgUrl: '',
    videoUrl: ''
  }

  receitaLogada: Receita
  logado: Usuario[] = []
  receitasFavoritas: Receita[] = []
  comentarios: Comentario[] = []

  nota: number = 0
  sum: number = 0

  ngOnInit(): void {
    if (this.Comentario.nota > 5) {
      this.Comentario.nota = 5
    }
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
      if (element.nome === this.receitaLogada.nome && element.usuario === this.Usuario.email) {
        this.heart = "../../assets/imagens/heart.png"
      }

    });

    const comentLog = window.localStorage.getItem('comentariosLogado') || '[]';
    this.comentariosLogado = JSON.parse(comentLog);

    this.comentarios.forEach(element => {
      if (element.receitaUser === this.receitaLogada.usuarioQuePostou && element.receita === this.receitaLogada.nome) {
        this.comentariosLogado.push(element)
      }
    });

    let contador3 = 0

    this.comentarios.forEach(element => {
      if (element.receita === this.receitaLogada.nome) {
        if(element.nota>5){
          element.nota = 5
        }
        if(element.nota<=5){
          contador3+=1
        }
      }
    });

    this.contadorComentarios = 0
    this.comentarios.forEach(element => {
      if(element.receita === this.receitaLogada.nome){
        this.sum+=element.nota
        this.contadorComentarios+=1
      }
    });
  }

  contadorComentarios: number = 0


  comentariosLogado: Comentario[] = []

  heart: any = "../../assets/imagens/heart-nocolor.png"
  contador: number = 0
  favorita(): void {
    this.contador += 1
    let favoritas: Receita = {
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

    for (let i = this.receitasFavoritas.length - 1; i>=0 ; i--){
      if (this.receitasFavoritas[i].nome === favoritas.nome && this.receitasFavoritas[i].usuario === favoritas.usuario) {
        this.receitasFavoritas.splice(i, 1)
        verificaSeTemOutraIgual = false
      }
    }

    if (verificaSeTemOutraIgual) {
      this.heart = "../../assets/imagens/heart.png"
      
      this.receitasFavoritas.push(favoritas)
    } else {
      this.heart = "../../assets/imagens/heart-nocolor.png"
    }
    localStorage.setItem('receitasFavoritas', JSON.stringify(this.receitasFavoritas))
  }

  ingredienteBol: boolean = false
  ingredienteOn(): void {
    this.ingredienteBol = true
    this.passoBol = false
    this.comentBol = false

  }

  passoBol: boolean = false
  passoOn(): void {
    this.passoBol = true
    this.ingredienteBol = false
    this.comentBol = false
  }

  comentBol: boolean = true
  comentOn(): void {
    this.comentBol = true
    this.passoBol = false
    this.ingredienteBol = false
  }

  desligaCard(event) {
    if (event.x > 607 && event.y > 60 || event.y > 20 && event.x < 497) {
      this.mostraMenuconfig = false
      this.mostraMenuCat = false
    }
  }

  mostraMenuconfig: boolean = false

  showMenuconfig(): void {
    this.mostraMenuconfig = !this.mostraMenuconfig
    this.mostraMenuCat = false
  }

  mostraMenuCat: boolean = false
  showCategorias(): void {
    this.mostraMenuCat = !this.mostraMenuCat
    this.mostraMenuconfig = false
  }

  comentar(): void {
    if (this.Comentario.comentario) {
      if (this.Comentario.nota > 5) {
        this.Comentario.nota = 5
      }

      else if(this.Comentario.nota < 0){
        this.Comentario.nota = 0
      }
      
      const newComent: Comentario = {
        usuarioQueComentou: this.Usuario.nome,
        fotoUsuario: this.Usuario.foto,
        comentario: this.Comentario.comentario,
        nota: this.Comentario.nota,
        receitaUser: this.receitaLogada.usuarioQuePostou,
        receita: this.receitaLogada.nome
      }

      this.comentarios.push(newComent)
      window.localStorage.setItem('comentarios', JSON.stringify(this.comentarios))

      this.ngOnInit()
      window.location.reload()
    }
  }

  excluirComentario(indice){
    this.comentarios.splice(indice, 1)
    window.localStorage.setItem('comentarios', JSON.stringify(this.comentarios))
    window.location.reload()
  }
}
