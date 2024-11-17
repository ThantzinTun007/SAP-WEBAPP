import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentManagementScreenComponent } from './document-management-screen.component';

describe('DocumentManagementScreenComponent', () => {
  let component: DocumentManagementScreenComponent;
  let fixture: ComponentFixture<DocumentManagementScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentManagementScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentManagementScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
