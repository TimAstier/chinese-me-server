import characterSchema from './character';
import wordSchema from './word';
// import createExercisesArray from '../../utils/createExercisesArray';

const exerciseSchema = {
  ref: 'id',
  attributes: [
    'id',
    'type',
    'text',
    'audioUrl',
    'choices',
    'character',
    'words',
    'translations',
    'order',
    'characterId',
    'number',
    'practiceId'
  ],
  keyForAttribute: 'camelCase',
  character: characterSchema,
  words: wordSchema
};

export default exerciseSchema;
