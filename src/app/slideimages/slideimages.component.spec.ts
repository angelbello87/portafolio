import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideimagesComponent } from './slideimages.component';

describe('SlideimagesComponent', () => {
  let component: SlideimagesComponent;
  let fixture: ComponentFixture<SlideimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
