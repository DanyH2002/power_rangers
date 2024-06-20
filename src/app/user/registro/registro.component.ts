import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HeaderComponent } from '../../partial/header/header.component';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    HeaderComponent,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
  animations: [
    trigger('tabAnimation', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({ transform: 'translateX(0%)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class RegistroComponent implements OnInit {
  scrollPosition: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  @Input() scroll: any;

  // Función para el botón de registro
  registro() {
    this.router.navigate(['/registro']);
  }
}
