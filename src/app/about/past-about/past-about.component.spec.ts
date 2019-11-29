import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastAboutComponent } from './past-about.component';

describe('PastAboutComponent', () => {
  let component: PastAboutComponent;
  let fixture: ComponentFixture<PastAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
