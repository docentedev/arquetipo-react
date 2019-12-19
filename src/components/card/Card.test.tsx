import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';
import { user } from '../../utils/__mocks__/axios';

test('Card is ok renderer', () => {
    const component = renderer.create(
        <Card user={user} />,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});