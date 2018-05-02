import React from 'react';
import AppStatusBar from '../AppStatusBar'
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<AppStatusBar />).toJSON();
  expect(rendered).toBeTruthy();
});
