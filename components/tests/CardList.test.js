import React from 'react';
import CardList from '../CardList';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<CardList />).toJSON();
  expect(rendered).toBeTruthy();
});
