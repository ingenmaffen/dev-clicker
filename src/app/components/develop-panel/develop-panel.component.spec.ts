import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopPanelComponent } from './develop-panel.component';

describe('DevelopPanelComponent', () => {
  let component: DevelopPanelComponent;
  let fixture: ComponentFixture<DevelopPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevelopPanelComponent]
    });
    fixture = TestBed.createComponent(DevelopPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});