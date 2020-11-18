import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdataeditComponent } from './userdataedit.component';

describe('UserdataeditComponent', () => {
  let component: UserdataeditComponent;
  let fixture: ComponentFixture<UserdataeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdataeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdataeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
