import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPrintingAccessComponent } from './settings-printing-access.component';

describe('SettingsPrintingAccessComponent', () => {
  let component: SettingsPrintingAccessComponent;
  let fixture: ComponentFixture<SettingsPrintingAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPrintingAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsPrintingAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
