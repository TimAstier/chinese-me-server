import audioToTextSchema from './audioToText';
import multipleChoiceSchema from './multipleChoice';
import characterSchema from './character';
import createExercisesArray from '../../utils/createExercisesArray';

// Currently 4 exercise types:
// 1. audioToText (has its own model AudioToText)
// 2. multipleChoice (has its own model MultipleChoice)
// 3. characterStroke (defined from CharacterExercise model)
// 3. multipleChoice (defined from CharacterExercise model)

const practiceSchema = {
  ref: 'id',
  attributes: [
    'multipleChoices',
    'audioToTexts',
    'characters',
    'exercises'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.exercises = createExercisesArray(
      record,
      [
        'multipleChoices',
        'audioToTexts',
        'characterExercises',
      ],
      record.type
    );
    return record;
  },
  characters: characterSchema,
  practices: practiceSchema,
  multipleChoices: multipleChoiceSchema,
  audioToTexts: audioToTextSchema
};

export default practiceSchema;
