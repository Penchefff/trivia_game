import React from 'react';
import { render } from '../../utils/test-utils';

import QuestionCard from './QuestionCard';

const defaultProps = {
  id: 'foobar',
  question: 'How old are you?',
  answers: [
    {
      id: 1,
      answer: '1'
    },
    {
      id: 2,
      answer: '2'
    },
    {
      id: 3,
      answer: '3'
    },
    {
      id: 4,
      answer: '4'
    }
  ],
  correctAnswerId: 1
};

const renderComponent = (props = {}) =>
  render(<QuestionCard {...{ ...defaultProps, ...props }} />);

describe('QuestionCard', () => {
  it('should show the question text', () => {
    const question = 'This is some text'
    const { getByText } = renderComponent({question});
    const textNode = getByText(question, 'p')
    expect(textNode.textContent).toBe(question);
  });
});
