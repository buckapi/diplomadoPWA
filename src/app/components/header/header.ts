import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
   adminUser = '';
  adminPassword = '';
  loginError = false;
  constructor(
    private router: Router
  ) {}
  loginAdmin() {

    const USER = 'admin';
    const PASSWORD = '123456';

    if (
      this.adminUser === USER &&
      this.adminPassword === PASSWORD
    ) {

      this.loginError = false;

      // cerrar modal manualmente
      const modal =
        document.getElementById('adminLoginModal');

      if (modal) {
        const bootstrapModal =
          (window as any).bootstrap.Modal.getInstance(modal);

        bootstrapModal.hide();
      }

      this.router.navigate(['/admin/cursos']);

    } else {

      this.loginError = true;

    }
  }

}
