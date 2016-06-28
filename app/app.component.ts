import {Component} from '@angular/core';
import {HeroDetailComponent} from "./hero-detail.component"
import {Hero} from "./models/hero"
import { HeroService } from "./services/hero.service"

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  ngOnInit(){
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
