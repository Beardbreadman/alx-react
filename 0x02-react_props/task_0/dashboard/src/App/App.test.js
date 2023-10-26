import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('Test App', () => {
  it('App without crashing', () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
});
