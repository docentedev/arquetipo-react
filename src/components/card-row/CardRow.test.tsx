import React from 'react';
import CardRow from './CardRow';
import renderer from 'react-test-renderer';

test('CardRow is ok renderer', () => {
    const component = renderer.create(
        <CardRow />,
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
});