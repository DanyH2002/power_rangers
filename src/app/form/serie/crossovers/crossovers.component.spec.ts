import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossoversComponent } from './crossovers.component';

describe('CrossoversComponent', () => {
  let component: CrossoversComponent;
  let fixture: ComponentFixture<CrossoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrossoversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrossoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
