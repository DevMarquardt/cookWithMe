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
    foto: string;
  }

  interface Comentario{
    fotoUsuario: string;
    usuarioQueComentou: string;
    comentario: string;
    nota: number;
    receita: string;
    receitaUser: string;
  }

@Component({
    templateUrl: 'perfilPG.html',
    styleUrls: ['perfilPG.css']
})

export class pgPerfilComponent{

    receitas: Receita[] = []
    usuarios: Usuario[] = []
    slide: Receita[] = []
    comentarios: Comentario[] = []

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
      videoUrl: ''
    }

    Comentario={
      fotoUsuario: '',
      usuarioQueComentou: '',
      comentario: '',
      nota: 0,
      receita: '',
      receitaUser: ''
    }

    ngOnInit(): void {

        const receita = window.localStorage.getItem('receitas') || '[]';
        this.receitas = JSON.parse(receita);

        const user = window.localStorage.getItem('logado') || '[]';
        this.Usuario = JSON.parse(user);

        const coment = window.localStorage.getItem('comentarios') || '[]';
        this.comentarios = JSON.parse(coment);

        this.receitas.forEach(element => {
            if(element.usuario === this.Usuario.email){
                this.slide.push(element)
            }
        });

        this.sum = 0
        let contadorComentarios: number = 0
        this.comentarios.forEach(element => {
          this.receitas.forEach(elementRec => {
            if(element.receita === elementRec.nome && elementRec.usuario === this.Usuario.email){
              this.sum+=element.nota
              contadorComentarios+=1
            }
          });
        });

        this.nota = (this.sum/contadorComentarios)
      }

      nota: number
      sum: number

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

      salvaImagem(img){
        localStorage.setItem('receitaPagina', JSON.stringify(img))
        window.location.replace("http://localhost:4200/Receita")
      }
}