import React from 'react';
import Home from './Home';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

test('Home is ok renderer', () => {
    const component = renderer.create(
        <Home />,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();

      const button = shallow((<Home />));
      button.find('button').simulate('click');

});