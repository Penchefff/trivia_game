import faker from 'faker';

const generateFakeQuestions = (n = 10) =>
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

export const fetchQuestions = async () => {
  const URL = 'http://192.168.14.235:8080/questions';

  try {
    // const data = await fetch(URL);
    // return await data.json();
    return await generateFakeQuestions();
  } catch (err) {
    console.error(err);
    return [];
  }
};
