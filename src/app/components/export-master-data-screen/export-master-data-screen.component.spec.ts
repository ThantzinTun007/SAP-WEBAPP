import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMasterDataScreenComponent } from './export-master-data-screen.component';

describe('ExportMasterDataScreenComponent', () => {
  let component: ExportMasterDataScreenComponent;
  let fixture: ComponentFixture<ExportMasterDataScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportMasterDataScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportMasterDataScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
