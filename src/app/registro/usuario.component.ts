import { Component } from "@angular/core";

interface Usuario {
    nome: string;
    email: string;
    senha: string;
    foto: string;
    adm: boolean;
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
    templateUrl: 'usuario.component.html',
    styleUrls: ['./usuario.component.css']
})


export class userComponent {
    Csenha: string
    usuarios: Usuario[] = []

    Usuario={
        nome: '',
        email: '',
        senha: '',
        foto: '',
        adm: false
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

    ngOnInit(): void {
      const user2 = window.localStorage.getItem('registrados') || '[]';
        this.usuarios = JSON.parse(user2);

      let verificaUsuariosIguais: boolean = true
      this.usuarios.forEach(element => {
        if(element.email === 'Administrador@gmail.com'){
          verificaUsuariosIguais = false
        }
      });
      if(verificaUsuariosIguais){
        const user:Usuario ={
          nome: 'Administrador',
          email: 'Administrador@gmail.com',
          senha: '...',
          foto: this.Usuario.foto = 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png',
          adm: true
        }
        this.usuarios.push(user)
        localStorage.setItem("registrados", JSON.stringify(this.usuarios))
      
        
        const receita: Receita={
          usuario: 'Administrador',
          nome: 'Spaghetti à Bolonhesa',
          ingrediente: `
                Ingredientes:
    
                300g de spaghetti
                500g de carne moída
                1 cebola picada
                2 dentes de alho picados
                400g de molho de tomate
                1 colher de sopa de azeite de oliva
                Sal e pimenta a gosto
                Queijo parmesão ralado (opcional)
          `,
          passoApasso: `Em uma panela grande, aqueça o azeite de oliva em fogo médio. Adicione a cebola e o alho, e refogue por alguns minutos até ficarem dourados.
    
          Acrescente a carne moída à panela e cozinhe até que esteja completamente dourada e cozida.
          
          Adicione o molho de tomate à panela e tempere com sal e pimenta a gosto. Deixe cozinhar em fogo baixo por aproximadamente 20 minutos, mexendo ocasionalmente.
          
          Enquanto isso, cozinhe o spaghetti em água fervente com sal, de acordo com as instruções da embalagem, até ficar al dente.
          
          Escorra o spaghetti cozido e sirva com o molho bolonhesa por cima. Polvilhe queijo parmesão ralado, se desejar.`,
          comentario: '',
          imgUrl: 'data:image/jpeg;base64,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',
          videoUrl: '',
          categoria: 'salgados',
          oculta: false
        }
        this.receitas.push(receita)
        localStorage.setItem('receitas', JSON.stringify(this.receitas))
        
        const receita2: Receita={
          usuario: 'Administrador',
          nome: 'Brownie de Chocolate',
          ingrediente: `
            Ingredientes:

            200g de chocolate meio amargo
            150g de manteiga
            1 e 1/2 xícaras de açúcar
            3 ovos
            1 colher de chá de extrato de baunilha
            1 xícara de farinha de trigo
            1/4 de xícara de cacau em pó
            1/2 colher de chá de sal
            1 xícara de nozes picadas (opcional)
          `,
          passoApasso: `Preaqueça o forno a 180°C. Unte uma forma quadrada com manteiga e forre-a com papel manteiga.

          Em uma tigela, derreta o chocolate meio amargo e a manteiga em banho-maria ou no micro-ondas, mexendo até obter uma mistura homogênea.
          
          Adicione o açúcar à mistura de chocolate e manteiga, e mexa bem.
          
          Acrescente os ovos um de cada vez, batendo bem após cada adição. Adicione o extrato de baunilha e misture.
          
          Em outra tigela, peneire a farinha de trigo, o cacau em pó e o sal. Misture bem.
          
          Adicione os ingredientes secos à mistura de chocolate e manteiga, e mexa até incorporar completamente.
          
          Se desejar, adicione as nozes picadas à massa e misture.
          
          Despeje a massa na forma preparada e espalhe uniformemente.
          
          Leve ao forno preaquecido por aproximadamente 25-30 minutos, ou até que um palito inserido no centro saia com algumas migalhas úmidas. Não asse demais para manter o brownie úmido.
          
          Retire do forno e deixe esfriar completamente antes de cortar em quadrados.`,
          comentario: '',
          imgUrl: 'https://www.recipetineats.com/wp-content/uploads/2020/03/Brownies_0-SQ.jpg',
          videoUrl: '',
          categoria: 'doces',
          oculta: false
        }
        this.receitas.push(receita2)
        localStorage.setItem('receitas', JSON.stringify(this.receitas))

        const receita3: Receita={
          usuario: 'Administrador',
          nome: 'Sopa de Abóbora',
          ingrediente: `
          1 abóbora média, descascada e cortada em cubos
          1 cebola picada
          2 dentes de alho picados
          2 cenouras picadas
          4 xícaras de caldo de legumes
          1 colher de chá de cominho em pó
          1 colher de chá de curry em pó
          1/2 colher de chá de canela em pó
          Sal e pimenta a gosto
          Azeite de oliva
          Sementes de abóbora (opcional, para decorar)
          `,
          passoApasso: `Em uma panela grande, aqueça um pouco de azeite de oliva em fogo médio. Adicione a cebola e o alho, e refogue por alguns minutos até ficarem dourados.

          Acrescente a abóbora e as cenouras à panela, e refogue por mais alguns minutos.
          Adicione o caldo de legumes, o cominho em pó, o curry em pó e a canela em pó à panela. Tempere com sal e pimenta a gosto.
          
          Deixe a sopa ferver e, em seguida, reduza o fogo para médio-baixo. Tampe a panela e deixe cozinhar por cerca de 20-25 minutos, ou até que a abóbora e as cenouras estejam macias.

Retire a panela do fogo e deixe a sopa esfriar um pouco. Em seguida, use um liquidificador ou um mixer de imersão para processar a sopa até obter uma consistência cremosa.

Se preferir uma sopa mais rústica, você pode amassar alguns pedaços de abóbora e cenoura com um garfo em vez de processar completamente.

Após processar a sopa, leve-a de volta ao fogo baixo para aquecer novamente. Verifique o tempero e ajuste o sal e a pimenta, se necessário.

Sirva a sopa de abóbora quente. Se desejar, decore com sementes de abóbora torradas por cima.`,
          comentario: '',
          imgUrl: 'https://escolhabefree.com.br/wp-content/uploads/2022/08/sopa-de-abobora.jpg',
          videoUrl: '',
          categoria: 'doces',
          oculta: false
        }
        this.receitas.push(receita3)
        localStorage.setItem('receitas', JSON.stringify(this.receitas))


        const receita4: Receita={
          usuario: 'Administrador',
          nome: 'Guacamole',
          ingrediente: `
          2 abacates maduros
          1 tomate médio, sem sementes e picado
          1 cebola pequena, picada
          Suco de 1 limão
          Coentro fresco picado a gosto
          Sal e pimenta a gosto
          Pimenta jalapeño picada a gosto (opcional)
          `,
          passoApasso: `Corte os abacates ao meio, retire o caroço e coloque a polpa em uma tigela.

          Amasse os abacates com um garfo até obter uma consistência cremosa.
          
          Adicione o tomate, a cebola, o suco de limão, o coentro e a pimenta jalapeño (se estiver usando) na tigela com o abacate amassado.
          
          Tempere com sal e pimenta a gosto. Misture bem todos os ingredientes até ficarem bem incorporados.
          
          Prove e ajuste os temperos, se necessário.
          
          Transfira a guacamole para um prato de servir e decore com folhas de coentro fresco.
          
          Sirva com nachos, tortilhas de milho ou como acompanhamento em tacos e burritos.`,
          comentario: '',
          imgUrl: 'https://assets.unileversolutions.com/recipes-v2/36456.jpg',
          videoUrl: '',
          categoria: 'salgados',
          oculta: false
        }
        this.receitas.push(receita4)
        localStorage.setItem('receitas', JSON.stringify(this.receitas))


        const receita5: Receita={
          usuario: 'Administrador',
          nome: 'Pudim de Leite Condensado',
          ingrediente: `
          1 lata de leite condensado
          2 latas de leite (use a lata de leite condensado vazia para medir)
          4 ovos
          1 colher de chá de essência de baunilha
          1 xícara de açúcar (para o caramelo)
          `,
          passoApasso: `
          Preaqueça o forno a 180°C.
          Em uma forma de pudim, coloque o açúcar e leve ao fogo médio. Mexa constantemente até o açúcar derreter e formar um caramelo dourado. Tome cuidado para não queimar.
          Com cuidado, gire a forma para que o caramelo cubra o fundo e as laterais da forma. Reserve.
          No liquidificador, coloque o leite condensado, o leite, os ovos e a essência de baunilha. Bata bem até obter uma mistura homogênea.
          Despeje a mistura do pudim na forma caramelizada.
          Cubra a forma com papel alumínio e leve ao forno preaquecido em banho-maria. Para isso, coloque a forma dentro de uma assadeira maior e adicione água quente até atingir a metade da altura da forma do pudim.
          Asse por cerca de 1 hora, ou até que o pudim esteja firme. Para verificar o ponto, insira um palito no centro do pudim; se sair limpo, está pronto.
          Retire a forma do forno e deixe o pudim esfriar completamente.
          Leve à geladeira por algumas horas ou durante a noite para firmar.
          Para desenformar, passe uma faca ao redor das bordas do pudim e inverta-o em um prato de servir. O caramelo irá escorrer sobre o pudim.`,
          comentario: '',
          imgUrl: 'https://static.itdg.com.br/images/1200-675/59e079217cc8af8291a8cb910d1d449f/318825-original.jpg',
          videoUrl: '',
          categoria: 'doces',
          oculta: false
        }
        this.receitas.push(receita5)
        localStorage.setItem('receitas', JSON.stringify(this.receitas))


        const receita6: Receita={
          usuario: 'Administrador',
          nome: 'Tacos Mexicanos',
          ingrediente: `
          500g de carne moída
          1 cebola picada
          2 dentes de alho picados
          1 colher de sopa de óleo vegetal
          1 colher de chá de cominho em pó
          1 colher de chá de páprica
          1 colher de chá de chili em pó
          Sal e pimenta a gosto
          8 tortilhas de milho
          Ingredientes opcionais para servir: queijo ralado, alface picada, tomate picado, coentro picado, creme de leite, guacamole, molho de pimenta
          `,
          passoApasso: `
          Aqueça o óleo vegetal em uma frigideira grande em fogo médio-alto. Adicione a cebola e o alho e refogue até ficarem dourados.

          Acrescente a carne moída à frigideira e cozinhe, mexendo ocasionalmente, até que esteja totalmente cozida.

          Adicione o cominho, a páprica, o chili em pó, o sal e a pimenta à carne moída. Misture bem para incorporar os temperos.

          Reduza o fogo para médio-baixo e cozinhe por mais alguns minutos para permitir que os sabores se combinem.

          Enquanto isso, aqueça as tortilhas de milho em uma frigideira seca em fogo médio-alto por cerca de 30 segundos de cada lado, ou até que fiquem levemente douradas e flexíveis.

          Retire as tortilhas da frigideira e coloque-as em um prato coberto com papel-toalha para absorver o excesso de umidade.

          Distribua a carne moída temperada igualmente sobre as tortilhas aquecidas.

          Adicione os ingredientes opcionais de sua preferência, como queijo ralado, alface picada, tomate picado, coentro picado, creme de leite, guacamole ou molho de pimenta.

          Dobre as tortilhas ao meio para formar os tacos.

          Sirva imediatamente e aproveite seus deliciosos tacos mexicanos.
          `,
          comentario: '',
          imgUrl: 'https://assets.unileversolutions.com/recipes-v2/232988.jpg',
          videoUrl: '',
          categoria: 'salgados',
          oculta: false
        }
        this.receitas.push(receita6)
        localStorage.setItem('receitas', JSON.stringify(this.receitas))


        const receita7: Receita={
          usuario: 'Administrador',
          nome: 'Salada Caprese',
          ingrediente: `
          2 tomates grandes
          250g de queijo mussarela de búfala
          Folhas frescas de manjericão
          Azeite de oliva extra virgem
          Vinagre balsâmico
          Sal e pimenta a gosto
          `,
          passoApasso: `
          Corte os tomates e a mussarela de búfala em rodelas de aproximadamente 1 cm de espessura.

          Em um prato de servir, disponha as rodelas de tomate alternando com as rodelas de queijo.

          Entre as camadas, coloque algumas folhas frescas de manjericão.

          Tempere a salada com sal e pimenta a gosto.

          Regue a salada com azeite de oliva extra virgem e um fio de vinagre balsâmico.

          Sirva imediatamente como entrada ou acompanhamento.

          `,
          comentario: '',
          imgUrl: 'https://3.bp.blogspot.com/-TVfFjf-qqsY/W1DUWGqKByI/AAAAAAAAKfw/Z_RcOZF-w-oXbyzyYMKUpm1E1IlG8FNQQCLcBGAs/s1600/468.jpg',
          videoUrl: '',
          categoria: 'salgados',
          oculta: false
        }
        this.receitas.push(receita7)
        localStorage.setItem('receitas', JSON.stringify(this.receitas))


        const receita8: Receita={
          usuario: 'Administrador',
          nome: 'Smoothie de Frutas Tropicais',
          ingrediente: `
          1 banana madura
          1 xícara de abacaxi em cubos
          1 xícara de manga em cubos
          1 xícara de leite de coco
          1/2 xícara de água de coco
          Gelo a gosto
          `,
          passoApasso: `
          Coloque todos os ingredientes no liquidificador.
          Bata até obter uma mistura homogênea e cremosa.
          Se preferir uma consistência mais líquida, adicione mais água de coco.
          Se preferir uma consistência mais grossa, adicione mais gelo.
          Prove e adicione açúcar ou adoçante, se necessário.
          Despeje o smoothie em copos e sirva imediatamente.
          `,
          comentario: '',
          imgUrl: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-smoothie.jpg',
          videoUrl: '',
          categoria: 'doces',
          oculta: false
        }
        this.receitas.push(receita8)
        localStorage.setItem('receitas', JSON.stringify(this.receitas))


        const receita9: Receita={
          usuario: 'Administrador',
          nome: 'Brigadeiro Gourmet',
          ingrediente: `
          1 lata de leite condensado
          2 colheres de sopa de cacau em pó
          2 colheres de sopa de manteiga sem sal
          1/2 xícara de creme de leite
          Granulado de chocolate (para decorar)
          `,
          passoApasso: `
          Em uma panela de fundo grosso, adicione o leite condensado, o cacau em pó e a manteiga.
          Leve ao fogo baixo e mexa constantemente com uma colher de pau ou espátula.
          Continue mexendo até que a mistura comece a desgrudar do fundo da panela. Isso pode levar de 10 a 15 minutos.
          Adicione o creme de leite à mistura e continue mexendo até que fique bem incorporado.
          Continue cozinhando o brigadeiro por mais alguns minutos, mexendo sempre, até obter uma consistência firme e que desgrude completamente do fundo da panela.
          Retire a panela do fogo e deixe o brigadeiro esfriar por alguns minutos.
          Com as mãos levemente untadas com manteiga, pegue pequenas porções da massa e enrole em formato de bolinhas.
          Passe cada brigadeiro no granulado de chocolate, cobrindo completamente.
          Coloque os brigadeiros em forminhas de papel e sirva em seguida.

          Essa é uma versão gourmet do clássico brigadeiro brasileiro. Você também pode experimentar diferentes sabores, adicionando ingredientes como nozes picadas, coco ralado, raspas de laranja, entre outros. Aproveite essa delícia!
          `,
          comentario: '',
          imgUrl: 'https://assets.delirec.com/images%2FhaztW3Xphpg6dAWjzLKIgW3ndc62%2Frecipe%2F45cdc669-bb94-4c24-bf6e-277f74447edd-Brigadeiro-Gourmet-gallery-0',
          videoUrl: '',
          categoria: 'doces',
          oculta: false
        }
        this.receitas.push(receita9)
        localStorage.setItem('receitas', JSON.stringify(this.receitas))
      }
    }

    nome: string
    novoUser(Csenha):void{
      let verificaUsuariosIguais: boolean = true
      this.usuarios.forEach(element => {
        if(element.email === this.Usuario.email && element.nome === element.email){
          verificaUsuariosIguais = false
        }
      });

      if(verificaUsuariosIguais){
        if(!this.Usuario.senha || !this.Usuario.nome || !this.Usuario.email){
          return
        }
        if(Csenha !== this.Usuario.senha){
          alert("As senhas não coincidem")
          return
        }
          const user:Usuario ={
            nome: this.Usuario.nome,
            email: this.Usuario.email,
            senha: this.Usuario.senha,
            foto: this.Usuario.foto = 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png',
            adm: false
          }
          this.usuarios.push(user)
          localStorage.setItem("registrados", JSON.stringify(this.usuarios))
          alert('cadastrado')
          this.Usuario.nome = null
          this.Usuario.email = null
          this.Usuario.senha = null
          this.Csenha = null
          window.location.replace("http://localhost:4200/login")
        }
      }
}