import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-description.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
    producto: ProductoDescripcion = {};
    id: string = '';

    constructor( private route: ActivatedRoute, public productoService: ProductosService ) {

    }

    ngOnInit(): void {
      this.route.params.subscribe( parameters => {
        console.log(parameters['id']);
        this.productoService.getProducto(parameters['id']).subscribe( (producto: any) => {
          this.id = parameters['id'];
          this.producto = producto;
        } );
      } )
    }
}
