import React from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

import { Button as BaseButton } from '@sumup/circuit-ui';

const correctStyles = ({ theme, isCorrect, disabled }) =>
  isCorrect &&
  disabled &&
  css`
    background-color: ${theme.colors.success};
  `;

const incorrectStyles = ({ theme, isIncorrect, disabled }) =>
  isIncorrect &&
  disabled &&
  css`
    background-color: ${theme.colors.danger};
  `;

const baseStyles = ({ theme }) => css`
  &:disabled {
    color: ${theme.colors.white};
    opacity: 1;
  }
`;

const Button = styled(BaseButton)(baseStyles, correctStyles, incorrectStyles);

/**
 * Describe Answer here.
 */
const Answer = ({ text, correctAnswerId, ...props }) => (
  <Button {...props}>{text}</Button>
);

Answer.propTypes = {
  /**
   * A consice description of the example prop.
   */
  text: PropTypes.string.isRequired,
  isCorrect: PropTypes.bool,
  isIncorrect: PropTypes.bool
};

Answer.defaultProps = {};

/**
 * @component
 */
export default Answer;
