import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZordsComponent } from './zords.component';

describe('ZordsComponent', () => {
  let component: ZordsComponent;
  let fixture: ComponentFixture<ZordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
