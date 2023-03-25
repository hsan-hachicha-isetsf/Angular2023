import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarticlescardComponent } from './listarticlescard.component';

describe('ListarticlescardComponent', () => {
  let component: ListarticlescardComponent;
  let fixture: ComponentFixture<ListarticlescardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarticlescardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarticlescardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
