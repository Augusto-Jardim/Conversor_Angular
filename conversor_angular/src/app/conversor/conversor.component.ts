import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

 // propriedades para armazenar o valor e a unidade de entrada
 inputValue: number = 0;
 inputUnit: string = 'metro';

 // propriedades para armazenar o valor e a unidade de saída
 outputValue: number = 0;
 outputUnit: string = 'metro';

 // função para realizar as conversões de medida
 convertValue() {
   if (this.inputUnit === 'metro') {
     if (this.outputUnit === 'quilometro') {
       // conversão de metros para quilômetros
       this.outputValue = this.inputValue / 1000;
     } else if (this.outputUnit === 'milha') {
       // conversão de metros para milhas
       this.outputValue = this.inputValue / 1609.34;
     }
   } else if (this.inputUnit === 'quilometro') {
     if (this.outputUnit === 'metro') {
       // conversão de quilômetros para metros
       this.outputValue = this.inputValue * 1000;
     } else if (this.outputUnit === 'milha') {
       // conversão de quilômetros para milhas
       this.outputValue = this.inputValue / 1.609;
     }
   } else if (this.inputUnit === 'milha') {
     if (this.outputUnit === 'metro') {
       // conversão de milhas para metros
       this.outputValue = this.inputValue * 1609.34;
     } else if (this.outputUnit === 'quilometro') {
       // conversão de milhas para quilômetros
       this.outputValue = this.inputValue * 1.609;
     }
   }
 }

}
