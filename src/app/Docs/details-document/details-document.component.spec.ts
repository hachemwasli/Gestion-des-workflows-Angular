import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDocumentComponent } from './details-document.component';

describe('DetailsDocumentComponent', () => {
  let component: DetailsDocumentComponent;
  let fixture: ComponentFixture<DetailsDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
