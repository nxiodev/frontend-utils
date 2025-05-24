import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOrganism } from './body.component';

describe('BodyOrganism', () => {
  let component: BodyOrganism;
  let fixture: ComponentFixture<BodyOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyOrganism]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
