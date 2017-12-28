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
      // Un-nest 'order' from practiceExercise joined record
      record.exercises[i].order = record.exercises[i].practiceExercise.order;
      delete record.exercises[i].practiceExercises;
      // Workaround so that exerciseSchema can serialize belongsTo associations
      // (needs an array)
      if (record.exercises[i].character) {
        record.exercises[i].character = [ record.exercises[i].character ];
      }
    });
    record.exercisesArray = createExercisesArray(record.exercises, record.type);
    return record;
  },
  exercises: exerciseSchema
};

export default practiceSchema;
