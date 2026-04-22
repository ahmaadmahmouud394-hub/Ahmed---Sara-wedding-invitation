import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTimeline } from './story-timeline';

describe('StoryTimeline', () => {
  let component: StoryTimeline;
  let fixture: ComponentFixture<StoryTimeline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryTimeline],
    }).compileComponents();

    fixture = TestBed.createComponent(StoryTimeline);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
