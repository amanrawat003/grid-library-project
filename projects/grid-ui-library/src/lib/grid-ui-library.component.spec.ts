import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridUiLibraryComponent } from './grid-ui-library.component';

describe('GridUiLibraryComponent', () => {
  let component: GridUiLibraryComponent;
  let fixture: ComponentFixture<GridUiLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridUiLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridUiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
