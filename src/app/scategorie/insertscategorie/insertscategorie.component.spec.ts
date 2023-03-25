import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertscategorieComponent } from './insertscategorie.component';

describe('InsertscategorieComponent', () => {
  let component: InsertscategorieComponent;
  let fixture: ComponentFixture<InsertscategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertscategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
