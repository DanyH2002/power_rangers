import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZordComponent } from './zord.component';

describe('ZordComponent', () => {
  let component: ZordComponent;
  let fixture: ComponentFixture<ZordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
