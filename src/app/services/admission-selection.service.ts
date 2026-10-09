import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdmissionSelectionService {
  readonly selectedCareer = signal('');

  selectCareer(career: string): void {
    this.selectedCareer.set(career);
  }
}
