import { SerialPrefixValidator } from './serial-prefix.validator';
import { Observable } from 'rxjs/Observable';

describe('SerialPrefixValidator', () => {

  let validator: Function;
  let serialPrefixSvcMock: any;
  let mockControl: any;

  beforeEach(() => {
    serialPrefixSvcMock = jasmine.createSpyObj('any', ['getAll$']);
    serialPrefixSvcMock.getAll$.and.returnValue(Observable.of([]));
    mockControl = {
      value: 'XYZ',
    };

    validator = SerialPrefixValidator.createValidator(serialPrefixSvcMock);
  });

  it('should return required if Prefix not in list', done => {
    serialPrefixSvcMock.getAll$.and.returnValue(Observable.of([{prefix: 'ABC'}]));

    validator(mockControl).subscribe(val => {
      expect(val).toEqual({required: true});
      done();
    });
  });

  it('should return null if prefix in list', done => {
    serialPrefixSvcMock.getAll$.and.returnValue(Observable.of([{prefix: 'XYZ'}]));

    validator(mockControl).subscribe(val => {
      expect(val).toBe(null);
      done();
    });
  });

  it('should be case insensitive', done => {
    serialPrefixSvcMock.getAll$.and.returnValue(Observable.of([{prefix: 'XYZ'}]));
    mockControl.value = 'xyz';

    validator(mockControl).subscribe(val => {
      expect(val).toBe(null);
      done();
    });
  });
});
