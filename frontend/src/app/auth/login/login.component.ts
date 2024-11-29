import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})



export class LoginComponent {
  credenciales = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Llamar al servicio para hacer login
    this.authService.login(this.credenciales).subscribe({
      next: (response) => {
        // Guardar el token en el localStorage
        localStorage.setItem('authToken', response.token);
        
        // Redirigir al home después del login exitoso
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error al iniciar sesión', error);
      }
    });
  }
}
