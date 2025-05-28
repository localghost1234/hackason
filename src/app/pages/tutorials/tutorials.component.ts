import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tutorial } from '@app/@core/interfaces/pages.interface';
import { TutorialsService } from '@app/@core/services/tutorials.service';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  standalone: true,
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class TutorialsComponent implements OnInit {
  selectedCategory = 'all';
  selectedTech = 'all';

  tutorials$: Observable<Tutorial[]>;
  categories$: Observable<string[]>;
  technologies$: Observable<string[]>;

  constructor(private tutorialsService: TutorialsService) {}

  ngOnInit(): void {
    this.tutorials$ = this.tutorialsService.getTutorials().pipe(shareReplay(1));

    this.categories$ = this.tutorials$.pipe(map((tutorials) => [...new Set(tutorials.map((t) => t.category))]));

    this.technologies$ = this.tutorials$.pipe(map((tutorials) => [...new Set(tutorials.map((t) => t.tech))]));
  }

  filterTutorials(tutorials: Tutorial[]): Tutorial[] {
    return tutorials.filter((t) => (this.selectedCategory === 'all' || t.category === this.selectedCategory) && (this.selectedTech === 'all' || t.tech === this.selectedTech));
  }
}
