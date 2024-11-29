import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para usar ngModel
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Elimina ToastrModule
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  register() {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        this.toastr.success('Usuario registrado exitosamente!', 'Éxito');
        console.log('Usuario registrado:', response);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.toastr.error('Hubo un problema con el registro. Intenta nuevamente.', 'Error');
      }
    });
  }
}
