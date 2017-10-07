import audioToTextSchema from './audioToText';
import multipleChoiceSchema from './multipleChoice';
import characterSchema from './character';
import shuffleArray from '../../utils/shuffleArray';

// TODO: Exact number of specific exercise types

const createExercisesArray = (record, exerciseTypes) => {
  const orderedNumbers = [];
  for (let i = 1; i < 11; i++) {
    orderedNumbers.push(i);
  }
  const randomNumbers = shuffleArray(orderedNumbers);
  const exercises = [];
  let orderIndex = 0;
  exerciseTypes.forEach(type => {
    record[type].forEach(e => {
      if (orderIndex > 9) {
        return null;
      }
      let exerciseType;
      if (type === 'characters') {
        const randomNumber = Math.random();
        exerciseType = randomNumber < 0.25 ? 'characterStrokeQuizs' : 'characterPinyins';
      } else {
        exerciseType = type;
      }
      exercises.push({
        type: exerciseType.slice(0, -1),
        id: e.id,
        order: randomNumbers[orderIndex]
      });
      return orderIndex++;
    });
  });
  return exercises.sort((a, b) => a.order - b.order);
};

const examSchema = {
  ref: 'id',
  attributes: [
    'episodeId',
    'multipleChoices',
    'audioToTexts',
    'characters',
    'exercises'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.episodeId = record.id;
    record.exercises = createExercisesArray(record, [
      'multipleChoices',
      'audioToTexts',
      'characters'
    ]);
    return record;
  },
  multipleChoices: multipleChoiceSchema,
  audioToTexts: audioToTextSchema,
  characters: characterSchema
};

export default examSchema;
