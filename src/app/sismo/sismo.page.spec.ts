import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SismoPage } from './sismo.page';

describe('SismoPage', () => {
  let component: SismoPage;
  let fixture: ComponentFixture<SismoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SismoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SismoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
