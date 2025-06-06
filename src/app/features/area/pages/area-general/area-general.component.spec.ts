import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaGeneralComponent } from './area-general.component';

describe('AreaGeneralComponent', () => {
  let component: AreaGeneralComponent;
  let fixture: ComponentFixture<AreaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
