import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentTypeComponent } from './add-document-type.component';

describe('AddDocumentTypeComponent', () => {
  let component: AddDocumentTypeComponent;
  let fixture: ComponentFixture<AddDocumentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDocumentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
