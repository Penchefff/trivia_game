import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Heading, Card } from '@sumup/circuit-ui';

/**
 * Describe WelcomeScreen here.
 */
class WelcomeScreen extends Component {
  static propTypes = {
    onChangeUsername: PropTypes.func,
    username: PropTypes.string
  };

  static defaultProps = {
    onChangeUsername: e => {
      e.preventDefault();
    },
    username: ''
  };

  render() {
    return (
      <Card>
        <Heading align="center">
          Nice to have you here, how about you tell me who you are?
        </Heading>
        <Input
          name="username"
          autoComplete="off"
          type="text"
          onChange={this.props.onChangeUsername}
          value={this.props.username}
        />
      </Card>
    );
  }
}
/**
 * @component
 */
export default WelcomeScreen;
