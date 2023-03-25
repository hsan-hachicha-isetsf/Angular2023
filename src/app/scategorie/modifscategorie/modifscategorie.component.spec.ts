import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifscategorieComponent } from './modifscategorie.component';

describe('ModifscategorieComponent', () => {
  let component: ModifscategorieComponent;
  let fixture: ComponentFixture<ModifscategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifscategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
