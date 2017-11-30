import exerciseSchema from './exercise';
import createExercisesArray from '../../utils/createExercisesArray';

const practiceSchema = {
  ref: 'id',
  attributes: [
    'exercises',
    'exercisesArray'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.exercises.forEach((e, i) => {
      record.exercises[i].order = record.exercises[i].practiceExercise.order;
      // Workaround so that exerciseSchema can serialize belongsTo associations
      // (needs an array)
      if (record.exercises[i].character) {
        record.exercises[i].character = [ record.exercises[i].character ];
      }
      if (record.exercises[i].audioToText) {
        record.exercises[i].audioToText = [ record.exercises[i].audioToText ];
      }
      if (record.exercises[i].multipleChoice) {
        record.exercises[i].multipleChoice = [ record.exercises[i].multipleChoice ];
      }
    });
    record.exercisesArray = createExercisesArray(record.practiceExercises, record.type);
    return record;
  },
  exercises: exerciseSchema
};

export default practiceSchema;
