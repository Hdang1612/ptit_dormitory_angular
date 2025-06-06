import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShifScheduleManageComponent } from './shif-schedule-manage.component';

describe('ShifScheduleManageComponent', () => {
  let component: ShifScheduleManageComponent;
  let fixture: ComponentFixture<ShifScheduleManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShifScheduleManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShifScheduleManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
