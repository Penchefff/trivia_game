import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, Heading, Card, Spacing } from '@sumup/circuit-ui';

import TopPlayers from '../TopPlayers';

/**
 * Describe WelcomeScreen here.
 */
class WelcomeScreen extends Component {
  static propTypes = {
    onChangeUsername: PropTypes.func,
    username: PropTypes.string,
    users: PropTypes.array
  };

  static defaultProps = {
    onChangeUsername: e => {
      e.preventDefault();
    },
    username: '',
    users: []
  };

  render() {
    return (
      <Fragment>
        <Spacing bottom>
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
        </Spacing>
        <TopPlayers data={this.props.users} />
      </Fragment>
    );
  }
}
/**
 * @component
 */
export default WelcomeScreen;
