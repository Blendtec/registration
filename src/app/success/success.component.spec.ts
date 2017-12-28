import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessComponent } from './success.component';
import { APP_BASE_HREF } from '@angular/common';
import { StoreService } from '../services/store.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SuccessComponent', () => {


  const successSvcMock = jasmine.createSpyObj('successService', ['post']);
  successSvcMock.post.and.returnValue(Promise.resolve());

  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessComponent],
      imports: [
      BrowserAnimationsModule
      ],
      providers: [
        StoreService
      ]
    })
      .compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
