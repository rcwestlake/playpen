import answerKey from '../my-stuff/answer-key.json';
import getDataForView from './';

describe('getDataForView', () => {
  it('should get all of the data in a nested object', () => {
    expect.assertions(1)
    return getDataForView().then(data => {
      expect(data).toEqual(answerKey);
    })
  })
})