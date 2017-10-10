import audioToTextSchema from './audioToText';
import multipleChoiceSchema from './multipleChoice';
import characterSchema from './character';
import shuffleArray from '../../utils/shuffleArray';

const createExercisesArray = (record, exerciseTypes) => {
  const exercises = [];
  exerciseTypes.forEach(type => {
    record[type].forEach(e => {
      if (type === 'characters') {
        exercises.push({
          type: 'characterPinyin',
          id: e.id
        });
        return exercises.push({
          type: 'characterStrokeQuiz',
          id: e.id
        });
      }
      return exercises.push({
        type: type.slice(0, -1),
        id: e.id
      });
    });
  });
  return shuffleArray(exercises);
};

const reviewSchema = {
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

export default reviewSchema;
