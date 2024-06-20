import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HeaderComponent } from "../header/header.component";


@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    animations: [
        trigger('tabAnimation', [
            state('void', style({ transform: 'translateX(100%)' })),
            state('*', style({ transform: 'translateX(0%)' })),
            transition('void <=> *', animate('300ms ease-in-out')),
        ]),
    ],
    imports: [HeaderComponent]
})
export class LandingComponent implements OnInit{
  scrollPosition: any;
  constructors() { }

  ngOnInit(): void {
  }

  images = [
    { src: 'https://i.pinimg.com/564x/0b/cd/04/0bcd044be99b9122acea195eb4605377.jpg', alt: 'Imagen 1' },
    { src: 'https://i.pinimg.com/564x/73/21/7a/73217a061a6ab27d4a57e619895bdfae.jpg', alt: 'Imagen 2' },
    { src: 'https://i.pinimg.com/564x/c1/b1/00/c1b100625d6ab90e54b12250af9771e3.jpg', alt: 'Imagen 3' },
    { src: 'https://i.pinimg.com/564x/94/40/fe/9440fe27a86f5ae512b33b0cf3e2d350.jpg', alt: 'Imagen 4' },
    { src: 'https://i.pinimg.com/564x/f0/79/9d/f0799dbd0428b00d2e863a23bad04045.jpg', alt: 'Imagen 5' },
    { src: 'https://i.pinimg.com/564x/04/08/7e/04087e2a23735cb967317bc8fcc36ce6.jpg', alt: 'Imagen 6' },
    { src: 'https://i.pinimg.com/564x/1b/2e/b2/1b2eb22b8d680853db80262039a1a257.jpg', alt: 'Imagen 7' },
    { src: 'https://i.pinimg.com/564x/d7/e6/3c/d7e63c665fc7eddc7e6d6e9abb1dc760.jpg', alt: 'Imagen 8' },
    { src: 'https://i.pinimg.com/564x/c4/e1/56/c4e1565035245cc4bb61681e6b73c8f9.jpg', alt: 'Imagen 9' },
    { src: 'https://i.pinimg.com/564x/20/2e/dc/202edc19eeabee9a2728df4225be7f8d.jpg', alt: 'Imagen 10' },
  ];

  @Input() scroll: any;
}
