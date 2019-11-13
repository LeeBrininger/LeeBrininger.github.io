import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotanyDisplayComponent } from './botany-display.component';

describe('BotanyDisplayComponent', () => {
  let component: BotanyDisplayComponent;
  let fixture: ComponentFixture<BotanyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotanyDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotanyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
