import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirePage } from './aire.page';

describe('AirePage', () => {
  let component: AirePage;
  let fixture: ComponentFixture<AirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
