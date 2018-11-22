import React from 'react';
import { render } from '../../utils/test-utils';

import Answer from './Answer';

const defaultProps = {
  text: 'What was your question?',
}

const renderComponent = (props = {}) =>
  render(<Answer {...{ ...defaultProps, ...props }} />);

describe('Answer', () => {
  it('should show the answer text', () => {
    const text = 'Answer'
    const {getByText} = renderComponent({ text })
    const answerNode = getByText(text);

    expect(answerNode.textContent).toBe(text);
  });
});
