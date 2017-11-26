import isEmpty from 'lodash/isEmpty';
import shuffleArray from './shuffleArray';

const createExercisesArray = (record, resourceTypes, practiceType) => {
  if (practiceType === 'exam') {
    return createExamExercisesArray(record, resourceTypes);
  }
  const exercises = [];
  resourceTypes.forEach(type => {
    if (!isEmpty(record[type])) {
      record[type].forEach(e => {
        if (type === 'characterExercises') {
          return exercises.push({
            type: e.type,
            id: e.characterId,
            order: e.number
          });
        }
        return exercises.push({
          type: type.slice(0, -1),
          id: e.id,
          order: e.order
        });
      });
    }
  });
  return exercises.sort((a, b) => a.order - b.order);
};

const createExamExercisesArray = (record, resourceTypes) => {
  const orderedNumbers = [];
  for (let i = 1; i < 11; i++) {
    orderedNumbers.push(i);
  }
  const randomNumbers = shuffleArray(orderedNumbers);
  const exercises = [];
  let orderIndex = 0;
  resourceTypes.forEach(type => {
    if (!isEmpty(record[type])) {
      record[type].forEach(e => {
        if (orderIndex > 9) {
          return null;
        }
        if (type === 'characterExercises') {
          exercises.push({
            type: e.type,
            id: e.characterId,
            order: randomNumbers[orderIndex]
          });
          return orderIndex++;
        }
        exercises.push({
          type: type.slice(0, -1),
          id: e.id,
          order: randomNumbers[orderIndex]
        });
        return orderIndex++;
      });
    }
  });
  return exercises.sort((a, b) => a.order - b.order);
};

export default createExercisesArray;
