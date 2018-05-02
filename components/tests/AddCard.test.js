import React from 'react';
import AddCard from '../AddCard';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<AddCard />).toJSON();
  expect(rendered).toBeTruthy();
});
