import { Component } from '@angular/core';

@Component({ selector: 'app-programs', templateUrl: './programs.html', styleUrl: './programs.css' })
export class ProgramsComponent {
  selectedInterest = 'crear';

  readonly interestMatches: Record<string, { area: string; careers: string }> = {
    crear: { area: 'Ingeniería', careers: 'Arquitectura · Ingeniería Civil · Sistemas e Informática' },
    gestionar: { area: 'Ciencias de la Empresa', careers: 'Administración · Marketing · Economía' },
    cuidar: { area: 'Ciencias de la Salud y Psicología', careers: 'Medicina · Enfermería · Psicología' },
    sociedad: { area: 'Ciencias Sociales y Derecho', careers: 'Comunicación · Educación · Derecho' },
  };

  selectInterest(event: Event): void {
    this.selectedInterest = (event.target as HTMLSelectElement).value;
  }
}
