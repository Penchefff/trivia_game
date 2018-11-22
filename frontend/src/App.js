import React, {Component} from 'react';
import styled from 'react-emotion/macro';
import { css } from 'emotion/macro';
import { ThemeProvider } from 'emotion-theming';
import { theme as themes, injectGlobalStyles } from '@sumup/circuit-ui';

import QuestionCard from './components/QuestionCard';
import Title from './components/Title';

const { circuit } = themes;

// Inject Circuit UI's global styles into the DOM.
injectGlobalStyles({
  theme: circuit,
  /**
   * Customizations of the global styles are done like this.
   * Note that we are passing in a template literal without
   * using the css macro.
   * */

  custom: `
    body {
      background-color: ${circuit.colors.n100};
    }
  `
});

const Container = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  min-height: 100vh;
  margin: 0 auto;
`;

const question = {
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

class App extends Component {
  state = {
    questions: [],
    currentQuestion: null
  };

  componentDidMount() {
    Promise.resolve([question]).then(([ currentQuestion, ...questions]) => {
      this.setState({ questions, currentQuestion })
    })
  }

  render() {
    const { currentQuestion } = this.state;

    if (!currentQuestion) {
      return null;
    }

    return (
      <ThemeProvider theme={circuit}>
        <Container>
          <Title />
          <QuestionCard {...currentQuestion} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
