import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HeaderComponent } from '../../../partial/header/header.component';

@Component({
  selector: 'app-crossovers',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './crossovers.component.html',
  styleUrl: './crossovers.component.css',
  animations: [
    trigger('tabAnimation', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({ transform: 'translateX(0%)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class CrossoversComponent implements OnInit {
  scrollPosition: any;
  constructors() { }

  ngOnInit(): void {
  }
  @Input() scroll: any;

}
