import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAboutComponent } from './current-about.component';

describe('CurrentAboutComponent', () => {
  let component: CurrentAboutComponent;
  let fixture: ComponentFixture<CurrentAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
