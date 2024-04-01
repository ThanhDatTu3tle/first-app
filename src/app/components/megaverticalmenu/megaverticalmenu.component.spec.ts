import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaverticalmenuComponent } from './megaverticalmenu.component';

describe('MegaverticalmenuComponent', () => {
  let component: MegaverticalmenuComponent;
  let fixture: ComponentFixture<MegaverticalmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaverticalmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegaverticalmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
