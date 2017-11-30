import isEmpty from 'lodash/isEmpty';
import shuffleArray from './shuffleArray';

const exerciseTypeToIdAttributeMap = {
  characterStrokeQuiz: 'characterId',
  characterPinyin: 'characterId',
  multipleChoice: 'multipleChoiceId',
  audioToText: 'audioToTextId'
};

const createExercisesArray = (practiceExercises, practiceType) => {
  if (isEmpty(practiceExercises)) {
    return [];
  }
  if (practiceType === 'exam') {
    return createExamExercisesArray(practiceExercises);
  }
  const exercisesArray = [];
  practiceExercises.forEach(p => {
    return exercisesArray.push({
      id: p.exerciseId,
      type: p.exercise.type,
      order: p.order,
      elementId: p.exercise[exerciseTypeToIdAttributeMap[p.exercise.type]]
    });
  });
  return exercisesArray.sort((a, b) => a.order - b.order);
};

const createExamExercisesArray = (practiceExercises) => {
  const orderedNumbers = [];
  for (let i = 1; i < 11; i++) {
    orderedNumbers.push(i);
  }
  const randomNumbers = shuffleArray(orderedNumbers);
  const exercisesArray = [];
  let orderIndex = 0;
  practiceExercises.forEach(p => {
    if (orderIndex > 9) {
      return null;
    }
    exercisesArray.push({
      id: p.exerciseId,
      type: p.exercise.type,
      order: randomNumbers[orderIndex],
      elementId: p.exercise[exerciseTypeToIdAttributeMap[p.exercise.type]]
    });
    return orderIndex++;
  });
  return exercisesArray.sort((a, b) => a.order - b.order);
};

export default createExercisesArray;
