import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossoverComponent } from './crossover.component';

describe('CrossoverComponent', () => {
  let component: CrossoverComponent;
  let fixture: ComponentFixture<CrossoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrossoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
