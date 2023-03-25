import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarticlestableComponent } from './listarticlestable.component';

describe('ListarticlestableComponent', () => {
  let component: ListarticlestableComponent;
  let fixture: ComponentFixture<ListarticlestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarticlestableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarticlestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
