import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Heading, Card } from '@sumup/circuit-ui'

var username = '';

function usernameChanged(e) {
    username = e.target.value;
}

/**
 * Describe WelcomeScreen here.
 */
const WelcomeScreen = ({ onSubmit }) => (
    <Card>
        <form>
            <Heading align="center">Nice to have you here, how about you tell me who you are?</Heading>
            <Input onChange={ usernameChanged }></Input>
            <Button onClick={() => onSubmit(username) }>Go to the questions</Button>
        </form>
    </Card>
);

WelcomeScreen.propTypes = {
  /**
   * A consice description of the example prop.
   */
  example: PropTypes.string
};

WelcomeScreen.defaultProps = {};

/**
 * @component
 */
export default WelcomeScreen;
