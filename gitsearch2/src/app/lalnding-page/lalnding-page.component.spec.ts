import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LalndingPageComponent } from './lalnding-page.component';

describe('LalndingPageComponent', () => {
  let component: LalndingPageComponent;
  let fixture: ComponentFixture<LalndingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LalndingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LalndingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
