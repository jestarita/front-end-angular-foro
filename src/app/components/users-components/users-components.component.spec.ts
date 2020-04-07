import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponentsComponent } from './users-components.component';

describe('UsersComponentsComponent', () => {
  let component: UsersComponentsComponent;
  let fixture: ComponentFixture<UsersComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
