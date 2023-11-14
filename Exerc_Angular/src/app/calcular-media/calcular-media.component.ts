import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calcular-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})
export class CalcularMediaComponent {

    resultado: string="";
    AC1: number=0;
    AC2: number=0;
    AG: number=0;
    AF: number=0;

  calcularMedia() {
    
    let mediaFinal = (this.AC1 * 0.15) + (this.AC2 * 0.30) + (this.AG * 0.10) + (this.AF * 0.45);

    
    if (mediaFinal >= 5) {
      this.resultado = "Aprovado com média " + mediaFinal;
    } else {
      this.resultado = "Reprovado com média " + mediaFinal;
    }
  }
}