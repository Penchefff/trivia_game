import React, { Component } from 'react';
import styled from 'react-emotion/macro';
import { ThemeProvider } from 'emotion-theming';
import { theme as themes, injectGlobalStyles } from '@sumup/circuit-ui';

import { fetchQuestions } from './QuestionService';
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
    username: null,
    currentQuestion: null,
    score: 0
  };

  async componentDidMount() {
    const [currentQuestion, ...questions] = await fetchQuestions();
    this.setState({ questions, currentQuestion });
  }

  handleSubmitQuestion = submittedQuestionId => {
    const { currentQuestion } = this.state;
    if (currentQuestion.id === submittedQuestionId) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        submittedQuestionId,
        disabled: true
      }));
    }

    setTimeout(() => {
      this.setState(({ questions }) => {
        if (!questions.length) {
          return {
            currentQuestion: null,
            questions: [],
            finished: true,
            submittedQuestionId: null
          };
        }

        const [nextQuestion, ...remainingQuestions] = questions;
        return {
          currentQuestion: nextQuestion,
          questions: remainingQuestions,
          disabled: false,
          submittedQuestionId: null
        };
      });
    }, 500);
  };

  handleSubmitUsername = username => {
    this.setState({ username });
  };

  render() {
    const {
      currentQuestion,
      disabled,
      score,
      finished,
      answeredQuestionId,
      username
    } = this.state;

    if (finished) {
      return <Title>{score}</Title>;
    }

    const body = username ? (
      <QuestionCard
        {...currentQuestion}
        answeredQuestionId={answeredQuestionId}
        onSubmit={this.handleSubmitQuestion}
        disabled={disabled}
        username={username}
      />
    ) : (
      <WelcomeScreen onSubmit={this.handleSubmitUsername} />
    );

    return (
      <ThemeProvider theme={circuit}>
        <Container>
          <Title />
          {body}
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
