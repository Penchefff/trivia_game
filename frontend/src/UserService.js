import faker from 'faker';

const generateFakeUsers = (n = 10) =>
  Array.from(Array(n).keys()).map(() => {
    return {
      username: faker.random.uuid(),
      score: faker.random.number(3)
    };
  });

export const fetchUsers = async () => {
  const URL = 'http://192.168.14.235:8080/users';

//  return generateFakeUsers(20);
   try {
     const data = await fetch(URL);
     return await data.json();
   } catch (err) {
     console.error(err);
     return [];
   }
};
