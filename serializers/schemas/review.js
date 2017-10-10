import audioToTextSchema from './audioToText';
import multipleChoiceSchema from './multipleChoice';
import characterSchema from './character';

const createExercisesArray = (record, exerciseTypes) => {
  const exercises = [];
  let order = 0;
  exerciseTypes.forEach(type => {
    record[type].forEach(e => {
      if (type === 'characters') {
        exercises.push({
          type: 'characterPinyin',
          id: e.id,
          order
        });
        order++;
        return exercises.push({
          type: 'characterStrokeQuiz',
          id: e.id,
          order
        });
      }
      exercises.push({
        type: type.slice(0, -1),
        id: e.id,
        order
      });
      return order++;
    });
  });
  return exercises.sort((a, b) => a.order - b.order);
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
