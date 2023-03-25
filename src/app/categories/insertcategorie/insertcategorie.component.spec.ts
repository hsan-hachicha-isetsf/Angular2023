import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertcategorieComponent } from './insertcategorie.component';

describe('InsertcategorieComponent', () => {
  let component: InsertcategorieComponent;
  let fixture: ComponentFixture<InsertcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertcategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
