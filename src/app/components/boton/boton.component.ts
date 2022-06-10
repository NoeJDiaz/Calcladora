import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() valor:string=" ";
  @Output() onClick = new EventEmitter();

    handlerClick(){
      this.onClick.emit(this.valor);
    }

    soyOperador(valor:string){
      return valor=="+"|| valor == "-" || valor =="*" || valor =="/";
    }

  constructor() { }

  ngOnInit(): void {
  }

}
