export const fetchQuestions = async () => {
  const URL = 'http://192.168.14.235:8080/questions';

  try {
    const data = await fetch(URL);
    return await data.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};
