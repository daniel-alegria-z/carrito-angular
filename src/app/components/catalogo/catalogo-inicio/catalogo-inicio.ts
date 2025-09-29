import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../core/services/producto';
import { Producto } from '../../../core/modelo/producto';
import { CarritoService } from '../../../core/services/carrito';

@Component({
  selector: 'app-catalogo-inicio',
  imports: [],
  templateUrl: './catalogo-inicio.html',
  styleUrl: './catalogo-inicio.css'
})

export class CatalogoInicio implements OnInit{
  private productoService = inject(ProductoService)
  private carritoService = inject(CarritoService);
  productos: Producto[] = [];

  ngOnInit(): void {
    
  this.getProductos();
  }

  getProductos(){
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data; 
        console.log(this.productos)
      }, error: (e) => {
        console.error(e);
      }
    })
  }

  agregarProducto(item: Producto){
    this.carritoService.agregar(item);
  }
}
