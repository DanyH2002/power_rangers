import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecperComponent } from './secper.component';

describe('SecperComponent', () => {
  let component: SecperComponent;
  let fixture: ComponentFixture<SecperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
