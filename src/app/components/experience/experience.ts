import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({ selector: 'app-experience', imports: [FormsModule], templateUrl: './experience.html', styleUrl: './experience.css' })
export class ExperienceComponent {
  admissionName = '';
  admissionSubmitted = false;

  submitAdmission(form: NgForm): void {
    this.admissionSubmitted = form.valid === true;
  }
}
