import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanoComponent } from './villano.component';

describe('VillanoComponent', () => {
  let component: VillanoComponent;
  let fixture: ComponentFixture<VillanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
