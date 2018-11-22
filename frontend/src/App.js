import React, { Component } from 'react';
import styled from 'react-emotion/macro';
import { ThemeProvider } from 'emotion-theming';
import {
  theme as themes,
  injectGlobalStyles,
  Text,
  Card as BaseCard,
  Button,
  Spacing
} from '@sumup/circuit-ui';

import { fetchQuestions } from './QuestionService';
import { fetchUsers } from './UserService';
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

const Card = styled(BaseCard)`
  width: 50vw;
  min-height: 50vh;
  justify-content: flex-start;
`;

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

const GAME_STATES = {
  INITIAL: 'initial',
  IN_PROGRESS: 'in_progress',
  FINISHED: 'finished'
};

class App extends Component {
  state = {
    questions: [],
    username: '',
    currentQuestion: null,
    score: 0,
    totalQuestions: 0,
    gameState: GAME_STATES.INITIAL
  };

  async componentDidMount() {
    this.resetData();
  }

  resetData = async () => {
    const [users, [currentQuestion, ...questions]] = await Promise.all([
      fetchUsers(),
      fetchQuestions(this.totalQuestions)
    ]);

    this.setState({
      users,
      currentQuestion,
      questions,
      totalQuestions: questions.length + 1
    });
  };

  handleNextQuestion = () => {
    this.setState(({ questions }) => {
      if (!questions.length) {
        return {
          currentQuestion: null,
          answeredQuestionId: null,
          questions: [],
          disabled: false,
          gameState: GAME_STATES.FINISHED
        };
      }

      const [nextQuestion, ...remainingQuestions] = questions;
      return {
        currentQuestion: nextQuestion,
        answeredQuestionId: null,
        questions: remainingQuestions,
        disabled: false
      };
    });
  };

  handleChangeUsername = e => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  handleSubmitQuestion = submittedQuestionId => {
    const { currentQuestion } = this.state;
    const isCorrectAnswer =
      currentQuestion.correctAnswerId === submittedQuestionId;

    this.setState(prevState => ({
      score: isCorrectAnswer ? prevState.score + 1 : prevState.score,
      disabled: true,
      answeredQuestionId: submittedQuestionId
    }));
  };

  getButtonText = () => {
    const { gameState } = this.state;

    const buttonText = {
      [GAME_STATES.INITIAL]: 'Start',
      [GAME_STATES.IN_PROGRESS]: 'Next',
      [GAME_STATES.FINISHED]: 'Start over'
    };

    return buttonText[gameState];
  };

  handleButtonClicked = e => {
    e.preventDefault();
    const { gameState } = this.state;
    if (gameState === GAME_STATES.IN_PROGRESS) {
      this.handleNextQuestion();
    } else if (gameState === GAME_STATES.INITIAL) {
      this.setState({ gameState: GAME_STATES.IN_PROGRESS });
    } else if (gameState === GAME_STATES.FINISHED) {
      this.setState({ gameState: GAME_STATES.INITIAL, score: 0 });
    }
  };

  isButtonDisabled = () => {
    const { gameState, answeredQuestionId } = this.state;
    return gameState === GAME_STATES.IN_PROGRESS && !answeredQuestionId;
  };

  render() {
    const {
      currentQuestion,
      disabled,
      score,
      answeredQuestionId,
      totalQuestions,
      username,
      gameState,
      users
    } = this.state;

    let body;

    if (gameState === GAME_STATES.FINISHED) {
      body = (
        <Card>
          <Text>
            You answered {score} of {totalQuestions} questions correctly.
          </Text>
        </Card>
      );
    }

    if (gameState === GAME_STATES.IN_PROGRESS) {
      body = (
        <QuestionCard
          {...currentQuestion}
          answeredQuestionId={answeredQuestionId}
          onSubmit={this.handleSubmitQuestion}
          disabled={disabled}
          username={username}
        />
      );
    }

    if (!body || gameState === GAME_STATES.INITIAL) {
      body = (
        <WelcomeScreen
          onChangeUsername={this.handleChangeUsername}
          username={username}
          users={users}
        />
      );
    }

    return (
      <ThemeProvider theme={circuit}>
        <Container>
          <Title />
          <Spacing bottom>{body}</Spacing>
          <Button
            type="button"
            primary
            disabled={this.isButtonDisabled()}
            onClick={this.handleButtonClicked}
          >
            {this.getButtonText()}
          </Button>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
