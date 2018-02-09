import characterSchema from './character';
import wordSchema from './word';

const exerciseSchema = {
  ref: 'id',
  attributes: [
    'id',
    'type',
    'guidelineText',
    'questionText',
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
