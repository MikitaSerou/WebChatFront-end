import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaToolComponent } from './textarea-tool.component';

describe('TextareaToolComponent', () => {
  let component: TextareaToolComponent;
  let fixture: ComponentFixture<TextareaToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
