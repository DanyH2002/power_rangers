import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorferComponent } from './morfer.component';

describe('MorferComponent', () => {
  let component: MorferComponent;
  let fixture: ComponentFixture<MorferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MorferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
