import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ProgramsComponent } from './components/programs/programs';
import { ExperienceComponent } from './components/experience/experience';
import { NewsComponent } from './components/news/news';
import { FooterComponent } from './components/footer/footer';

@Component({ selector: 'app-root', imports: [HeaderComponent, HeroComponent, ProgramsComponent, ExperienceComponent, NewsComponent, FooterComponent], templateUrl: './app.html', styleUrl: './app.css' })
export class App {}
