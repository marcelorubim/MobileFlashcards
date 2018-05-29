import React from 'react';
import * as actions from '.';

import renderer from 'react-test-renderer';

it('Action is not a function', () => {
  expect(typeof actions.addDeck() === 'function').toBeFalsy()
});