import isEmpty from 'lodash/isEmpty';

const createExercisesArray = (exercises, practiceType) => {
  if (isEmpty(exercises)) {
    return [];
  }
  if (practiceType === 'exam') {
    return createExamExercisesArray(exercises);
  }
  const exercisesArray = [];
  exercises.forEach(e => {
    return exercisesArray.push({
      id: e.id,
      order: e.number,
      type: e.type
    });
  });
  return exercisesArray.sort((a, b) => a.order - b.order);
};

const createExamExercisesArray = (exercises) => {
  const exercisesArray = [];
  exercises.forEach((e, i) => {
    exercisesArray.push({
      id: e.id,
      order: i,
      type: e.type
    });
  });
  return exercisesArray;
};

export default createExercisesArray;
