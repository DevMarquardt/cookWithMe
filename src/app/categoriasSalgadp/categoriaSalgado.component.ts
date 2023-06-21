import { Component } from "@angular/core";

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

  interface Usuario {
    nome: string;
    email: string;
    senha: string;
    foto: string;
  }

  interface Pesquisa{
    pesquisa: string
  }
  

@Component({
    templateUrl: 'categoriaSalgado.html',
    styleUrls: ['categoriaSalgado.css']
})

export class categoriaSalgadoComponent{


    Receita={
        usuario:'',
        nome: '',
        ingrediente: '',
        passoApasso: '',
        comentario: '',
        imgUrl: '',
        videoUrl: '',
        categoria: ''
      }

      Usuario={
        nome: '',
        email: '',
        senha: '',
        foto: ''
      }

      Pesquisa={
        pesquisa: ''
      }
  
    receitas: Receita[] = []
    usuarios: Usuario[] = []
    slide: Receita[] = []
    receitaPagina: Receita[] = []
    embaralhaDnv: Receita[] = []
  
  
  
    ngOnInit(): void {
      const receita = window.localStorage.getItem('receitas') || '[]';
      this.receitas = JSON.parse(receita);
  
      const user = window.localStorage.getItem('logado') || '[]';
      this.Usuario = JSON.parse(user);
      
      const pesquisa = window.localStorage.getItem('Pesquisa') || '[]';
      this.Pesquisa.pesquisa = JSON.parse(pesquisa);

        var m = this.receitas.length, t, i;

        while (m) {
        i = Math.floor(Math.random() * m--);

        t = this.receitas[m];
        this.receitas[m] = this.receitas[i];
        this.receitas[i] = t;
        }

        localStorage.setItem('receitas', JSON.stringify(this.receitas))

        this.receitas.forEach(element => {
            if(element.categoria === "salgados"){
                this.slide.push(element)
            }
        });

        m = this.receitas.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
    
            t = this.receitas[m];
            this.receitas[m] = this.receitas[i];
            this.receitas[i] = t;
            }
    
            this.receitas.forEach(element => {
                if(element.categoria === "salgados"){
                    this.embaralhaDnv.push(element)
                }
            });
    }
  
    salvaImagem(img){
      localStorage.setItem('receitaPagina', JSON.stringify(img))
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

    enterPesquisa(pesquisa){
        window.location.replace('http://localhost:4200/Pesquisa')
        localStorage.setItem('Pesquisa', JSON.stringify(pesquisa))
      }
  
}
