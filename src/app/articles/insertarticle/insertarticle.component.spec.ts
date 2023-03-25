import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarticleComponent } from './insertarticle.component';

describe('InsertarticleComponent', () => {
  let component: InsertarticleComponent;
  let fixture: ComponentFixture<InsertarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
