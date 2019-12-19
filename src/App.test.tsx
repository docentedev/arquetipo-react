import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('test to App', () => {
  test('App is ok renderer', () => {
    const component = renderer.create(
        <App />,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
  });
  
  test('App input change', () => {
    const event = { target: { name: 'pollName', value: 'spam' } };
    const button = shallow((<App />));
    button.find('input').simulate('change', event);
  
  });
});