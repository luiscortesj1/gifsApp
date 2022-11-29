import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  // Busca el elemento del html -> txtBuscar
  // non null assertion operator == !
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  // Injectar el servicio
  constructor(private gifsService: GifsService) {}

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    // No insertar datos vacíos
    if (valor.trim().length == 0) {
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
