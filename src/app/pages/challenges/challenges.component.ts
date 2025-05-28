import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Challenge } from '@app/@core/interfaces/pages.interface';
import { ChallengesService } from '@app/@core/services/challenges.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, FormsModule],
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent {
  challenges$: Observable<Challenge[]>;
  filteredChallenges$: Observable<Challenge[]>;
  selectedDifficulty$ = new BehaviorSubject<string>('all');
  isListView = false;
  difficultyLevels = ['Beginner', 'Medium', 'Advanced'];
  activeChallenge: Challenge | null = null;

  constructor(private challengesService: ChallengesService) {}

  ngOnInit(): void {
    this.challenges$ = this.challengesService.getChallenges();

    this.filteredChallenges$ = combineLatest([
      this.challenges$, // emits once with challenge list
      this.selectedDifficulty$, // emits every time user selects a new difficulty
    ]).pipe(map(([challenges, selected]) => challenges.filter((ch) => selected === 'all' || ch.difficulty === selected)));
  }

  onDifficultyChange(value: string) {
    this.selectedDifficulty$.next(value);
  }

  toggleViewMode() {
    this.isListView = !this.isListView;
  }

  launchChallenge(challenge: Challenge) {
    this.activeChallenge = challenge;
    document.body.style.overflow = 'hidden';
  }

  closeVM() {
    this.activeChallenge = null;
    document.body.style.overflow = '';
  }
}
