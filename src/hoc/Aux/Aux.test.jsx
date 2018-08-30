import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Aux from './Aux';

configure({ adapter: new Adapter() });

describe('<Aux />', () => {
  let wrapper = null;
  const htmlChildren = <div><span>tester</span></div>;
  beforeEach(async () => {
    wrapper = shallow(<Aux>{htmlChildren}</Aux>);
  });

  it('should call wrap children', () => {
    expect(wrapper.contains(htmlChildren)).toBeTruthy();
  });
});

