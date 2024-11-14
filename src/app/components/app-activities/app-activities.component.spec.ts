import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActivitiesComponent } from './app-activities.component';

describe('AppActivitiesComponent', () => {
  let component: AppActivitiesComponent;
  let fixture: ComponentFixture<AppActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
