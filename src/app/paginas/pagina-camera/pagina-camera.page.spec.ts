import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCameraPage } from './pagina-camera.page';

describe('PaginaCameraPage', () => {
  let component: PaginaCameraPage;
  let fixture: ComponentFixture<PaginaCameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCameraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
