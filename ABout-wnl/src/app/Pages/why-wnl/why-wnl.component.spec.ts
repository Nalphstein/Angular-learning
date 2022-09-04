import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWNLComponent } from './why-wnl.component';

describe('WhyWNLComponent', () => {
  let component: WhyWNLComponent;
  let fixture: ComponentFixture<WhyWNLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyWNLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWNLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
