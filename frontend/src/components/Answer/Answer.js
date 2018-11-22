import React from 'react';
import PropTypes from 'prop-types';

import {Button} from '@sumup/circuit-ui'

/**
 * Describe Answer here.
 */
const Answer = ({ text, ...props }) => <Button {...props}>{text}</Button>;

Answer.propTypes = {
  /**
   * A consice description of the example prop.
   */
  text: PropTypes.string.isRequired
};

Answer.defaultProps = {};

/**
 * @component
 */
export default Answer;
