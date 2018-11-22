import React from 'react';

import { render } from '../../utils/test-utils';

import WelcomeScreen from './WelcomeScreen';

const defaultProps = {};

const renderComponent = (props = {}) =>
  render(<WelcomeScreen {...{ ...defaultProps, ...props }} />);

describe('WelcomeScreen', () => {
  it('should display a greeting heading', () => {
  });

  it('should allow the user to enter their name', () => {
  });

  it('should allow the user to start the quiz', () => {
  });
});
