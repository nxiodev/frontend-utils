import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIconsComponent } from './login-icons.component';

describe('LoginIconsComponent', () => {
  let component: LoginIconsComponent;
  let fixture: ComponentFixture<LoginIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
