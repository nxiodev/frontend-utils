import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginActionsComponent } from './login-actions.component';

describe('LoginActionsComponent', () => {
  let component: LoginActionsComponent;
  let fixture: ComponentFixture<LoginActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
