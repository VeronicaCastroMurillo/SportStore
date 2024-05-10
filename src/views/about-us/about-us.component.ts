import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

interface CompanyValues {
  value: string;
  viewValue: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, NgForOf, MatButtonModule, MatCardModule, MatIconModule, MatListModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  imagesSportsUrl: string[] = [
    'https://www.randolphschool.net/app/uploads/2023/02/FB33E261-3734-479C-98AA-AA312953577D-1024x1024.jpeg',
    'https://miro.medium.com/v2/resize:fit:1024/1*GDW9v288ND88FwwAcaXlmg.jpeg',
    'https://fcf.com.co/wp-content/uploads/2023/11/DSC9599-1024x1024.jpg',
    'https://static.wanderon.in/wp-content/uploads/2023/07/aryamanwanderon_water_sports_in_andaman_islands_4c6bd4ee-8ede-490a-bf60-2deb4c423f89.png'
  ];

  comValues: CompanyValues[] = [
    { value:'Personal_Capacitado',viewValue: 'Atención Rápida ', description: 'Contamos con personal capacitado para asesorarlo rápidamente.', icon: 'perm_identity' },
    { value: 'Entrega_Inmediata', viewValue: 'Entrega Inmediata',description: 'Le entregamos su orden en menos de 48 horas sin costo adicional.', icon: 'timer' },
    { value: 'Cliente_Frecuente', viewValue: 'Cliente Frecuente', description: 'Contamos con descuentos adicionales para clientes frecuentes.', icon: 'shopping_cart' },
    { value: 'Compra_Accesible', viewValue: 'Compra en Linea', description: 'Contamos con servicio de compra y pago en linea para facilitar su experiencia.', icon: 'phonelink' },
  ];


}
