import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHeaderOrganism } from './secondheader.component';

describe('SecondHeaderOrganism', () => {
  let component: SecondHeaderOrganism;
  let fixture: ComponentFixture<SecondHeaderOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondHeaderOrganism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondHeaderOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
