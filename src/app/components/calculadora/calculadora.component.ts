import { Component, OnInit } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

    expresion:string ="0";

    agregarExpresion(valor:any){
    if (valor == "=") {
      console.log("calculando...");
      this.expresion = evaluate(this.expresion);
    }
    else{
      if(this.expresion =="0"){
        this.expresion="";
      }
      this.expresion +=valor;

    }
  }

  limpiarDisplay(){
    this.expresion="0";

  }

  constructor() { }

  ngOnInit(): void {
  }

}
