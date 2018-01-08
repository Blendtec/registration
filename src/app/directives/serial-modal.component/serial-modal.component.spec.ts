import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SerialModalComponent } from './serial-modal.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('SerialModalComponent', () => {
  let component: SerialModalComponent;
  let fixture: ComponentFixture<SerialModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialModalComponent ],
      providers: [
        { provide: TranslateService, useValue: {} },
      ],
      imports: [TranslateModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hide', () => {

    it('should set showing to false', () => {
       component.hide();
       expect(component.showing).toBe(false);
    });
  });

  describe('show', () => {
    it('should set showing to true', () => {
      component.show();
      expect(component.showing).toBe(true);
    });
  });
});
