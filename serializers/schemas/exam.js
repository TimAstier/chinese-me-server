import audioToTextSchema from './audioToText';
import multipleChoiceSchema from './multipleChoice';

const createExercisesArray = (record, exerciseTypes) => {
  const exercises = [];
  exerciseTypes.forEach(type => {
    record[type].forEach(e => {
      exercises.push({
        type: type.slice(0, -1),
        id: e.id,
        order: e.order
      });
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
    'exercises'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.episodeId = record.id;
    record.exercises = createExercisesArray(record, ['multipleChoices', 'audioToTexts']);
    return record;
  },
  multipleChoices: multipleChoiceSchema,
  audioToTexts: audioToTextSchema
};

export default examSchema;
