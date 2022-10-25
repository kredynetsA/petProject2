import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCellRendererComponent } from './rating-cell-renderer.component';

describe('RatingCellRendererComponent', () => {
  let component: RatingCellRendererComponent;
  let fixture: ComponentFixture<RatingCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
