import { Component, NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { userLoginComponent } from "./login/usuariologin.component";
import { userComponent } from "./registro/usuario.component";
import { ReceitaComponent } from "./addReceita/addReceita.component";
import { PaginaInicialComponent } from "./paginaInicial/paginaInicial.component";
import { paginaDaReceita } from "./paginaDaReceita/paginaReceita.component";
import { favoritasComponent } from "./paginaFavoritas/favoritas.component";
import { perfilComponent } from "./geral/perfil.component";
import { pgPerfilComponent } from "./perfil/pgperfil.component";
import { pesquisaComponent } from "./Pesquisa/pesquisa.component";
import { categoriaSalgadoComponent } from "./categoriasSalgadp/categoriaSalgado.component";
import { categoriaDoceComponent } from "./categoriasDoces/categoriaSDoce.component";
import { privacidadeComponent } from "./privacidade/privacidade.component";

const rotas:Route[] = [
    {
        path: 'registrar',
        component: userComponent
    },
    
    {
        path: 'login',
        component: userLoginComponent
    },

    {
        path: 'addReceita',
        component: ReceitaComponent
    },

    {
        path: 'Inicio',
        component: PaginaInicialComponent
    },

    {
        path: 'Receita',
        component: paginaDaReceita
    },

    {
        path: 'Favoritas',
        component: favoritasComponent
    },

    {
        path: 'Perfil-Geral',
        component: perfilComponent
    },

    {
        path: 'Perfil',
        component: pgPerfilComponent
    },  

    {
        path: 'Pesquisa',
        component: pesquisaComponent
    },

    {
        path: 'categoria-Salgados',
        component: categoriaSalgadoComponent
    },

    {
        path: 'categoria-Doces',
        component: categoriaDoceComponent
    },

    {
        path: 'privacidade',
        component: privacidadeComponent
    },
    
    {
        path:'',
        redirectTo:'registrar',
        pathMatch: 'full'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}