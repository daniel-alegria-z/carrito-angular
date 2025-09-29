import { Routes } from '@angular/router';
import path from 'path';
import { CatalogoInicio } from './components/catalogo/catalogo-inicio/catalogo-inicio';
import { CarritoListar } from './components/carrito/carrito-listar/carrito-listar';

export const routes: Routes = [
    {path:'', component:CatalogoInicio},
    {path:'carrito', component:CarritoListar},
    {path:'**', pathMatch:'full', redirectTo:''}
];
