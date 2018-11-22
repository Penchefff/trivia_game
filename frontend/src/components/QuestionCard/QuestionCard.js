import React from 'react';
import PropTypes from 'prop-types';
import { Card as BaseCard, Spacing, Heading } from '@sumup/circuit-ui';
import styled, { css } from 'react-emotion';

import Question from '../Question';
import Answer from '../Answer';

const Card = styled(BaseCard)`
  width: 50vw;
  min-height: 30vh;
`;

const AnswerList = styled('ul')`
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
`;

const AnswerWrapper = styled('li')(
  ({ theme }) => css`
    width: 100%;
    &:not(:last-of-type) {
      margin-bottom: ${theme.spacings.kilo};
    }
  `
);

/**
 * Describe QuestionCard here.
 */
const QuestionCard = ({
  question: text,
  answers,
  onSubmit,
  username,
  disabled
}) => (
  <Card>
    <Heading size={Heading.MEGA}>Lets do this, {username}</Heading>
    <Spacing bottom>
      <Question text={text} />
    </Spacing>
    <AnswerList>
      {answers.map(({ answer, id }) => (
        <AnswerWrapper key={id}>
          <Answer
            className={css`
              width: 100%;
            `}
            text={answer}
            disabled={disabled}
            onClick={() => {
              onSubmit(id);
            }}
          />
        </AnswerWrapper>
      ))}
    </AnswerList>
  </Card>
);

QuestionCard.propTypes = {
  /**
   * A consice description of the example prop.
   */
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  username: PropTypes.string
};

QuestionCard.defaultProps = {
  disabled: false,
  username: ''
};

/**
 * @component
 */
export default QuestionCard;
