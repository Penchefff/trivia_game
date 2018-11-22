import React from 'react'
import PropTypes from 'prop-types';
import {Text as BaseText } from '@sumup/circuit-ui'
import styled, {css} from 'react-emotion';
import { transparentize } from 'polished'

const Text = styled(BaseText)(({ theme }) => css`
  background-color: ${transparentize(0.5, theme.colors.n300)};
  border-radius: ${theme.borderRadius.giga};
  padding: ${theme.spacings.kilo};
`);

/**
 * Describe Question here.
 */
const Question = ({text}) => <Text>{text}</Text>

Question.propTypes = {
  /**
   * A consice description of the example prop.
   */
  text: PropTypes.string.isRequired
};

/**
 * @component
 */
export default Question;
