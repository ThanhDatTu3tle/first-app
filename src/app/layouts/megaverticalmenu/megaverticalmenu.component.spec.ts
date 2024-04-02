import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaVertiCalMenuComponent } from './megaverticalmenu.component';

describe('MegaVertiCalMenuComponent', () => {
  let component: MegaVertiCalMenuComponent;
  let fixture: ComponentFixture<MegaVertiCalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaVertiCalMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaVertiCalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
