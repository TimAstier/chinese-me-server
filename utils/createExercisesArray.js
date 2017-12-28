import isEmpty from 'lodash/isEmpty';
import shuffleArray from './shuffleArray';

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
      order: e.order,
      type: e.type
    });
  });
  return exercisesArray.sort((a, b) => a.order - b.order);
};

const createExamExercisesArray = (exercises) => {
  const orderedNumbers = [];
  for (let i = 1; i < 11; i++) {
    orderedNumbers.push(i);
  }
  const randomNumbers = shuffleArray(orderedNumbers);
  const exercisesArray = [];
  let orderIndex = 0;
  exercises.forEach(e => {
    if (orderIndex > 9) {
      return null;
    }
    exercisesArray.push({
      id: e.id,
      order: randomNumbers[orderIndex],
      type: e.type
    });
    return orderIndex++;
  });
  return exercisesArray.sort((a, b) => a.order - b.order);
};

export default createExercisesArray;
