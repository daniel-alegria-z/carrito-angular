import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoListar } from './carrito-listar';

describe('CarritoListar', () => {
  let component: CarritoListar;
  let fixture: ComponentFixture<CarritoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
