import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCoverImageComponent } from './dialog-cover-image.component';

describe('DialogCoverImageComponent', () => {
  let component: DialogCoverImageComponent;
  let fixture: ComponentFixture<DialogCoverImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCoverImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
