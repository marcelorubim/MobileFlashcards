import React from 'react';
import Tabs from '../Tabs';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Tabs />).toJSON();
  expect(rendered).toBeTruthy();
});
