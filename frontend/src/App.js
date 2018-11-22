import React, {Component} from 'react';
import styled from 'react-emotion/macro';
import { ThemeProvider } from 'emotion-theming';
import { theme as themes, injectGlobalStyles } from '@sumup/circuit-ui';

import { fetchQuestions } from './QuestionService'
import QuestionCard from './components/QuestionCard';
import WelcomeScreen from './components/WelcomeScreen';
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

class App extends Component {
  state = {
    questions: [],
    currentQuestion: question,
    username: null
  };

  async componentDidMount() {
    const [currentQuestion, ...questions] = await fetchQuestions();
    this.setState({ questions, currentQuestion })
  }

  RenderPage() {
    const { currentQuestion, username } = this.state;

    if (!username) {
        return <WelcomeScreen onSubmit={ this.SetUsername.bind(this) } />
    } else if (currentQuestion) {
        currentQuestion.username = username;
        return <QuestionCard {...currentQuestion} />
    }
  }

  SetUsername(username) {
    this.setState({ username: username });
  }

  render() {
    return (
      <ThemeProvider theme={circuit}>
        <Container>
          <Title />
            { this.RenderPage() }
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
