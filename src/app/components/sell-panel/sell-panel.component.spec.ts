import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPanelComponent } from './sell-panel.component';

describe('SellPanelComponent', () => {
  let component: SellPanelComponent;
  let fixture: ComponentFixture<SellPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellPanelComponent]
    });
    fixture = TestBed.createComponent(SellPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});