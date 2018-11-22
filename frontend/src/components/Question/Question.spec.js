import React from 'react';
import { render, getByText } from 'react-testing-library';

import Question from './Question';

const defaultProps = {
  text: 'What is your name'
};

const renderComponent = (props = {}) =>
  render(<Question {...{ ...defaultProps, ...props }} />);

describe('Question', () => {
  it.skip('should display the question text', () => {
    const text = 'Is this a question?'
    const {container} = renderComponent({ text });
  });
});
