import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewImageModalComponent } from './new-image-modal.component';

describe('NewImageModalComponent', () => {
  let component: NewImageModalComponent;
  let fixture: ComponentFixture<NewImageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewImageModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
