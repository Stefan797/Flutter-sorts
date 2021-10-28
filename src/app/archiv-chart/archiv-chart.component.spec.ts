import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivChartComponent } from './archiv-chart.component';

describe('ArchivChartComponent', () => {
  let component: ArchivChartComponent;
  let fixture: ComponentFixture<ArchivChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
