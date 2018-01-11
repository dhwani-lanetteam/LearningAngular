import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyOddComponent } from './only-odd.component';

describe('OnlyOddComponent', () => {
  let component: OnlyOddComponent;
  let fixture: ComponentFixture<OnlyOddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyOddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
