import { StatesValidator } from './has-states.validator';
import { Observable } from 'rxjs/Observable';
describe('HasStatesValidator', () => {

  let validator: Function;
  let stateSvcMock: any;
  let mockControl: any;

  beforeEach(() => {
    stateSvcMock = jasmine.createSpyObj('any', ['getAll$']);
    stateSvcMock.getAll$.and.returnValue(Observable.of([]));
    mockControl = {
      value: null,
      parent: jasmine.createSpyObj('AbstractControl', ['get'])
    };

    validator = StatesValidator.createValidator(stateSvcMock);
  });

  it('should return required if country has states but no state selected', done => {
    stateSvcMock.getAll$.and.returnValue(Observable.of([{country: 'US'}]));
    mockControl.parent.get.and.returnValue({value: 'US'});

    validator(mockControl).subscribe(val => {
      expect(val).toEqual({required: true});
      done();
    });
  });

  it('should return null if country has no states', done => {
    stateSvcMock.getAll$.and.returnValue(Observable.of([]));
    mockControl.parent.get.and.returnValue('AF');

    validator(mockControl).subscribe(val => {
      expect(val).toBe(null);
      done();
    });
  });
});
