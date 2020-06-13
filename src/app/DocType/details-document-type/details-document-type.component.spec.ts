import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDocumentTypeComponent } from './details-document-type.component';

describe('DetailsDocumentTypeComponent', () => {
  let component: DetailsDocumentTypeComponent;
  let fixture: ComponentFixture<DetailsDocumentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDocumentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDocumentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
