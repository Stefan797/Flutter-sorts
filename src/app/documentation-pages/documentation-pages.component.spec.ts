import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationPagesComponent } from './documentation-pages.component';

describe('DocumentationPagesComponent', () => {
  let component: DocumentationPagesComponent;
  let fixture: ComponentFixture<DocumentationPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
