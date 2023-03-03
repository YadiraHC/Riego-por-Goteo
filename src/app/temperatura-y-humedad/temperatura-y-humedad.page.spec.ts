import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemperaturaYHumedadPage } from './temperatura-y-humedad.page';

describe('TemperaturaYHumedadPage', () => {
  let component: TemperaturaYHumedadPage;
  let fixture: ComponentFixture<TemperaturaYHumedadPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturaYHumedadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemperaturaYHumedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
