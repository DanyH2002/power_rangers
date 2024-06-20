import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorfersComponent } from './morfers.component';

describe('MorfersComponent', () => {
  let component: MorfersComponent;
  let fixture: ComponentFixture<MorfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorfersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MorfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
