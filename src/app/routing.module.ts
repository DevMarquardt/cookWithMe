import { Component, NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { userLoginComponent } from "./login/usuariologin.component";
import { userComponent } from "./registro/usuario.component";
import { ReceitaComponent } from "./addReceita/addReceita.component";
import { PaginaInicialComponent } from "./paginaInicial/paginaInicial.component";

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