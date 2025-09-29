import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from '../../../core/services/carrito';
import { Carrito } from './../../../core/modelo/carrito';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-carrito-listar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: '/carrito-listar.html',
  styleUrl: './carrito-listar.css'
})
export class CarritoListar implements OnInit{
  public carritoService = inject(CarritoService);
  listCarrito: Carrito[]=[];

  ngOnInit(): void {
    this.getListCarrito();
  } 
  
  getListCarrito(){
    this.listCarrito=this.carritoService.getCarrito();
  }
  eliminarItem(index: number){
    this.carritoService.eliminar(index);
    this.getListCarrito();
  }

  actualizar(item: Carrito , index: number){
    this.carritoService.actualizar(index , item.cantidad);
  }

  onKeyDown(event: any){
    event.preventDefault();

  }
}
