import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import audioToTextSchema from './schemas/audioToText';
import multipleChoiceSchema from './schemas/multipleChoice';

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

const ReviewSerializer = new JSONAPISerializer('reviews', {
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
});

export default ReviewSerializer;
