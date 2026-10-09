import { Component } from '@angular/core';
import { AdmissionSelectionService } from '../../services/admission-selection.service';

interface InterestPath {
  id: string;
  label: string;
  icon: string;
  faculty: string;
  message: string;
  careers: string;
  featuredCareer: string;
}

interface FacultyOffer {
  id: string;
  name: string;
  icon: string;
  summary: string;
  careers: string[];
}

@Component({ selector: 'app-programs', templateUrl: './programs.html', styleUrl: './programs.css' })
export class ProgramsComponent {
  constructor(private readonly admissionSelection: AdmissionSelectionService) {}

  searchTerm = '';
  openFacultyId = 'ingenieria';

  readonly faculties: FacultyOffer[] = [
    { id: 'empresa', name: 'Ciencias de la Empresa', icon: 'bi-briefcase', summary: 'Formación para crear proyectos y liderar organizaciones en distintos sectores.', careers: ['Administración', 'Administración y Finanzas', 'Administración y Gestión del Talento Humano', 'Administración y Gestión Pública', 'Administración y Marketing', 'Administración y Negocios Digitales', 'Administración y Negocios Internacionales', 'Contabilidad y Finanzas', 'Economía'] },
    { id: 'ingenieria', name: 'Ingeniería', icon: 'bi-cpu', summary: 'Diseña soluciones para los retos de tecnología, industria, infraestructura y ciudad.', careers: ['Arquitectura', 'Arquitectura y Diseño de Interiores', 'Ciencia de la Computación', 'Ingeniería Ambiental', 'Ingeniería Civil', 'Ingeniería de Minas', 'Ingeniería de Sistemas e Informática', 'Ingeniería Eléctrica', 'Ingeniería Empresarial', 'Ingeniería Industrial', 'Ingeniería Mecánica', 'Ingeniería Mecatrónica'] },
    { id: 'salud', name: 'Salud', icon: 'bi-heart-pulse', summary: 'Desarrolla conocimientos y experiencia para cuidar la salud y calidad de vida.', careers: ['Enfermería', 'Farmacia y Bioquímica', 'Medicina Humana', 'Nutrición y Dietética', 'Odontología', 'Tecnología Médica – Especialidad en Laboratorio Clínico y Anatomía Patológica', 'Tecnología Médica – Especialidad en Radiología', 'Tecnología Médica – Especialidad en Terapia Física y Rehabilitación'] },
    { id: 'sociales', name: 'Ciencias Sociales', icon: 'bi-people', summary: 'Comunica ideas y crea experiencias de aprendizaje para distintas comunidades.', careers: ['Ciencias de la Comunicación', 'Educación con especialidad en innovación y aprendizaje digital'] },
    { id: 'derecho', name: 'Derecho', icon: 'bi-bank', summary: 'Analiza normas, argumenta ideas y contribuye a una sociedad más justa.', careers: ['Derecho'] },
    { id: 'psicologia', name: 'Psicología', icon: 'bi-chat-square-heart', summary: 'Comprende a las personas y contribuye a su bienestar en distintos entornos.', careers: ['Psicología'] },
  ];

  get visibleFaculties(): FacultyOffer[] {
    const query = this.normalize(this.searchTerm.trim());
    if (!query) return this.faculties;

    return this.faculties
      .map((faculty) => ({ ...faculty, careers: faculty.careers.filter((career) => this.normalize(career).includes(query)) }))
      .filter((faculty) => faculty.careers.length > 0);
  }

  setSearchTerm(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.openFacultyId = this.searchTerm ? '' : 'ingenieria';
  }

  toggleFaculty(id: string): void {
    if (this.searchTerm) {
      this.searchTerm = '';
      this.openFacultyId = id;
      return;
    }
    this.openFacultyId = this.openFacultyId === id ? '' : id;
  }

  private normalize(value: string): string {
    return value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  readonly interestPaths: InterestPath[] = [
    { id: 'innovar', label: 'Crear e innovar', icon: 'bi-cpu', faculty: 'Facultad de Ingeniería', message: 'Convierte preguntas en ideas, prototipos y soluciones para los desafíos de las ciudades y la industria.', careers: 'Ing. de Sistemas e Informática · Ing. Civil · Arquitectura', featuredCareer: 'Ingeniería de Sistemas e Informática' },
    { id: 'emprender', label: 'Emprender y liderar', icon: 'bi-graph-up-arrow', faculty: 'Facultad de Ciencias de la Empresa', message: 'Imagina proyectos, entiende a las personas y encuentra nuevas formas de hacer crecer una organización.', careers: 'Administración · Marketing · Negocios Digitales', featuredCareer: 'Administración' },
    { id: 'salud', label: 'Cuidar la salud', icon: 'bi-heart-pulse', faculty: 'Facultad de Ciencias de la Salud', message: 'Acompaña a las personas, promueve su bienestar y participa en soluciones para una vida más saludable.', careers: 'Medicina Humana · Enfermería · Nutrición y Dietética', featuredCareer: 'Medicina Humana' },
    { id: 'comunicar', label: 'Comunicar y educar', icon: 'bi-megaphone', faculty: 'Facultad de Ciencias Sociales', message: 'Cuenta historias, comparte conocimiento y crea experiencias que conecten con distintas comunidades.', careers: 'Ciencias de la Comunicación · Educación', featuredCareer: 'Ciencias de la Comunicación' },
    { id: 'justicia', label: 'Buscar justicia', icon: 'bi-bank', faculty: 'Facultad de Derecho', message: 'Analiza distintas perspectivas, argumenta tus ideas y ayuda a construir una sociedad más justa.', careers: 'Derecho', featuredCareer: 'Derecho' },
    { id: 'personas', label: 'Comprender a las personas', icon: 'bi-chat-square-heart', faculty: 'Facultad de Psicología', message: 'Explora cómo pensamos y sentimos para contribuir a la salud mental y al desarrollo de las personas.', careers: 'Psicología', featuredCareer: 'Psicología' },
  ];

  selectedInterestId = this.interestPaths[0].id;

  get selectedPath(): InterestPath {
    return this.interestPaths.find((path) => path.id === this.selectedInterestId) ?? this.interestPaths[0];
  }

  chooseInterest(id: string): void {
    if (this.interestPaths.some((path) => path.id === id)) this.selectedInterestId = id;
  }

  continueToAdmission(): void {
    this.admissionSelection.selectCareer(this.selectedPath.featuredCareer);
  }
}
