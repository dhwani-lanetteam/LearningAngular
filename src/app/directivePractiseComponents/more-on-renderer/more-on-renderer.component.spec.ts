import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOnRendererComponent } from './more-on-renderer.component';

describe('MoreOnRendererComponent', () => {
  let component: MoreOnRendererComponent;
  let fixture: ComponentFixture<MoreOnRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreOnRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreOnRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
