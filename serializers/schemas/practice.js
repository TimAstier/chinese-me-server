import exerciseSchema from './exercise';
import createExercisesArray from '../../utils/createExercisesArray';
import shuffleArray from '../../utils/shuffleArray';

const practiceSchema = {
  ref: 'id',
  attributes: [
    'type',
    'exercises',
    'exercisesArray'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.exercises.forEach((e, i) => {
      // Workaround so that exerciseSchema can serialize belongsTo associations
      // (needs an array)
      if (record.exercises[i].character) {
        record.exercises[i].character = [ record.exercises[i].character ];
      }
      // Randomize choices in choicesToOrder exercises
      if (e.type === 'choicesToOrder') {
        record.exercises[i].choices = shuffleArray(record.exercises[i].choices);
      }
    });
    record.exercisesArray = createExercisesArray(record.exercises, record.type);
    return record;
  },
  exercises: exerciseSchema
};

export default practiceSchema;
