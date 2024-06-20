import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HeaderComponent } from '../../partial/header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ConexionService } from '../../services/conexion.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HeaderComponent,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  animations: [
    trigger('tabAnimation', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({ transform: 'translateX(0%)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  scrollPosition: any;
  constructor(private router: Router, private conexion: ConexionService) { }

  ngOnInit(): void {

  }
  @Input() scroll: any;

  usuarios: any[] = [];

  // Variable para verificar si la sesión está iniciada
  sesionIniciada: boolean = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Los campos son válidos, ejecuta la lógica de inicio de sesión
      const correo = form.value.correo;
      const contrasena = form.value.contrasena;
      // Llama a tu función de inicio de sesión
      this.login(correo, contrasena);
    } else {
      // Los campos no son válidos, puedes mostrar un mensaje de error o realizar otra acción
      console.error('Error al iniciar sesion');
    }
  }

  login(correo: string, contrasena: string) {
    // Aquí puedes ejecutar la lógica de inicio de sesión con el correo y la contraseña
    // Llamada al método del servicio para autenticar al usuario
    this.conexion.getUsuarioPorId(1).subscribe(
      (response) => {
        // Lógica para validar el tipo de usuario y redirigir según corresponda
        const tipoUsuario = response.tipo; // Suponiendo que el tipo de usuario se devuelve en la respuesta
        if (tipoUsuario === 1) {
          // El usuario es un administrador, redirige a una página de administrador
          this.sesionIniciada = true;
          this.router.navigate(['/landing']);
        } else {
          // El usuario es un usuario normal, redirige a la página de inicio
          this.sesionIniciada = true;
          this.router.navigate(['/landing']);
        }
      },
        (error) => {
          // Manejo de errores, mostrar un mensaje de error al usuario
          console.error('Error al obtener el usuario por ID:', error);
        }
      );
  }

  // Función para el botón de registro
  registro() {
    this.router.navigate(['/registro']);
  }

  // Función para el botón de cerrar sesión
  cerrarSesion() {
    // Aquí puedes agregar la lógica para cerrar la sesión del usuario
    // Por ejemplo, podrías eliminar las credenciales almacenadas o invalidar la sesión en el servidor
    // Por ahora, simplemente vamos a simular que el cierre de sesión es exitoso
    this.sesionIniciada = false;
  }
}
