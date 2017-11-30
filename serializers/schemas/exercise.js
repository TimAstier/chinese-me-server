import audioToTextSchema from './audioToText';
import multipleChoiceSchema from './multipleChoice';
import characterSchema from './character';
// import createExercisesArray from '../../utils/createExercisesArray';

const exerciseSchema = {
  ref: 'id',
  attributes: [
    'type',
    'order',
    'character',
    'multipleChoice',
    'audioToText',
  ],
  keyForAttribute: 'camelCase',
  character: characterSchema,
  multipleChoice: multipleChoiceSchema,
  audioToText: audioToTextSchema
};

export default exerciseSchema;
