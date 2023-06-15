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
    templateUrl: 'addReceita.component.html',
    styleUrls: ['addreceita.component.css']
})

export class ReceitaComponent{


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
    
    const receita: Receita={
      usuario: this.Usuario.email,
      nome: this.Receita.nome,
      ingrediente: this.Receita.ingrediente,
      passoApasso: this.Receita.passoApasso,
      comentario: this.Receita.comentario,
      imgUrl: this.imageUrl || '',
      videoUrl: this.videoUrl || ''
    }
    this.receitas.push(receita)
    alert('receita adicionada')
    localStorage.setItem('receitas', JSON.stringify(this.receitas))
    this.Receita.ingrediente = null
    this.Receita.nome = null
    this.Receita.passoApasso = null
    this.Receita.comentario = null

  }

}