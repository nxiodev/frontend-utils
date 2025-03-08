import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarItemComponent } from './searchbar-item.component';

describe('SearchbarItemComponent', () => {
  let component: SearchbarItemComponent;
  let fixture: ComponentFixture<SearchbarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchbarItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
