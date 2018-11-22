import faker from 'faker';

const generateFakeQuestions = (n = 3) =>
  Array.from(Array(n).keys()).map(() => {
    const answers = Array.from(Array(4).keys()).map(() => ({
      id: faker.random.uuid(),
      answer: faker.random.word()
    }));
    return {
      question: faker.lorem.sentence(),
      id: faker.random.uuid(),
      correct_answer_id: answers[faker.random.number(3)].id,
      answers
    };
  });

const mapQuestion = ({ correct_answer_id: correctAnswerId, ...rest }) => ({
  ...rest,
  correctAnswerId
})

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
    // "Content-Type": "application/x-www-form-urlencoded",
  },
  cache: 'no-cache'
};

export const fetchQuestions = async () => {
  const URL = 'http://localhost:8080/questions';

  try {
    const data = await fetch(URL, defaultOptions);
    const questions = await data.json();
    return questions.map(mapQuestion)
  } catch (err) {
    console.error(err);
    return [];
  }
};
