import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanosComponent } from './villanos.component';

describe('VillanosComponent', () => {
  let component: VillanosComponent;
  let fixture: ComponentFixture<VillanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
