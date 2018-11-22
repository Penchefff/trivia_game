import * as Service from './QuestionService';

describe('QuestionService', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => ({
          results: [
            {
              question: 'one'
            },
            {
              question: 'two'
            }
          ]
        })
      })
    );
  });
  describe('fetching questions from the backend', () => {
    it('should return a Promise', () => {
      const actual = Service.fetchQuestions();
      expect(actual).toBeInstanceOf(Promise);
    });

    describe('the promise', () => {
      it('should resolve to an array of questions', async () => {
        const actual = await Service.fetchQuestions();
        expect(actual).toBeInstanceOf(Array);
        expect(actual).not.toHaveLength(0);
      });
    });
  });
});
