import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryChartComponent } from './repository-chart.component';

describe('RepositoryChartComponent', () => {
  let component: RepositoryChartComponent;
  let fixture: ComponentFixture<RepositoryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
