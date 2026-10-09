import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdmissionSelectionService } from '../../services/admission-selection.service';

@Component({ selector: 'app-experience', imports: [FormsModule], templateUrl: './experience.html', styleUrl: './experience.css' })
export class ExperienceComponent {
  admissionName = '';
  admissionSubmitted = false;

  constructor(private readonly admissionSelection: AdmissionSelectionService) {}

  get selectedCareer(): string {
    return this.admissionSelection.selectedCareer();
  }

  set selectedCareer(career: string) {
    this.admissionSelection.selectCareer(career);
  }

  submitAdmission(form: NgForm): void {
    this.admissionSubmitted = form.valid === true;
  }
}
