import faker from 'faker';

const BASE_URL = 'http://localhost:8080';

const generateFakeUsers = (n = 10) =>
  Array.from(Array(n).keys()).map(() => ({
    username: faker.random.uuid(),
    score: faker.random.number(3)
  }));

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
    // "Content-Type": "application/x-www-form-urlencoded",
  },
  cache: 'no-cache'
};

export const fetchUsers = async () => {
  const URL = `${BASE_URL}/users`;

  try {
    const data = await fetch(URL, defaultOptions);
    return await data.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const submitScore = data => {
  const URL = `${BASE_URL}/users`;
  try {
    return fetch(URL, {
      ...defaultOptions,
      method: 'POST',
      body: JSON.stringify(data)
    });
  } catch (err) {
    console.error(err);
    return {};
  }
};
