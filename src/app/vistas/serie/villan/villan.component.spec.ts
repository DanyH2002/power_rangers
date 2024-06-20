import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanComponent } from './villan.component';

describe('VillanComponent', () => {
  let component: VillanComponent;
  let fixture: ComponentFixture<VillanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
