import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifarticleComponent } from './modifarticle.component';

describe('ModifarticleComponent', () => {
  let component: ModifarticleComponent;
  let fixture: ComponentFixture<ModifarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
