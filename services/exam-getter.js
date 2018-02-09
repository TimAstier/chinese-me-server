import models from '../models';
import Sequelize from 'sequelize';
import createExercisesArray from '../utils/createExercisesArray';
import { NUMBER_OF_EXERCISES_IN_EXAM } from '../constants/exam';
import shuffleArray from '../utils/shuffleArray';

const Op = Sequelize.Op;

const practiceTypesToTest = [
  'P1', 'P4', 'P5',
  'C1', 'C2', 'C3', 'C5',
  'W3', 'W4', 'W5',
  'G1', 'G2', 'G3', 'G7'
];

export default function ExamGetter(params) {
  const episodeId = params.episodeId;
  let practiceIdsFromCurrentEpisode;
  return models.episode.findOne({
    where: { id: episodeId },
    include: [{
      model: models.practice,
      required: true,
      attributes: ['id']
    }]
  })
  .then(episode => {
    practiceIdsFromCurrentEpisode = episode.practices.map(e => e.id);
    return episode;
  })
  // find the IDs of previous N-5 episodes
  .then(episode => {
    const seasonId = episode.seasonId;
    const episodeNumber = episode.number;
    return models.episode.findAll({
      where: {
        seasonId,
        number: {
          [Op.between]: [Math.max(1, episodeNumber - 5), episodeNumber]
        }
      }
    })
    .then(episodes => {
      return episodes;
    });
  })
  // find the IDs of all practices with correct types belonging to those episodes
  // the selected practices are the recommended ones
  .then(episodes => {
    const episodeIds = episodes.map(e => e.id);
    return models.practice.findAll({
      where: {
        episodeId: {
          [Op.in]: episodeIds
        },
        type: {
          [Op.in]: practiceTypesToTest
        },
        recommended: true
      }
    })
    .then(practices => {
      return practices;
    });
  })
  // find all exercises belonging to those practices
  .then(practices => {
    const practiceIds = practices.map(e => e.id);
    return models.exercise.findAll({
      where: {
        practiceId: {
          [Op.in]: practiceIds
        }
      },
      include: [{
        model: models.word,
        required: false,
        include: [{
          model: models.exerciseWord,
          required: false
        }]
      }, {
        model: models.character,
        required: false,
        include: [{
          model: models.characterT,
          as: 'translations',
          required: false,
          attributes: [ 'meaning' ]
        }]
      }, {
        model: models.exerciseT,
        as: 'translations',
        required: false
      }],
      order: [
        [ models.word, models.exerciseWord, 'order', 'ASC' ]
      ]
    })
    .then(exercises => {
      // separate exercises between:
      // - the ones belonging to currentEpisode
      // - the ones belonging to previous episodes
      let currentEpisodeExercises = [];
      let otherExercises = [];
      let examExercises = [];
      exercises.forEach(e => {
        if (practiceIdsFromCurrentEpisode.indexOf(e.practiceId) === -1) {
          otherExercises.push(e);
        } else {
          currentEpisodeExercises.push(e);
        }
      });
      // shuffle the arrays
      currentEpisodeExercises = shuffleArray(currentEpisodeExercises);
      otherExercises = shuffleArray(otherExercises);
      if (otherExercises.length < NUMBER_OF_EXERCISES_IN_EXAM / 2) {
        // this should only happen in the first episode
        currentEpisodeExercises.splice(NUMBER_OF_EXERCISES_IN_EXAM, currentEpisodeExercises.length - NUMBER_OF_EXERCISES_IN_EXAM);
      } else {
        // take half exercises from each array
        currentEpisodeExercises.splice(NUMBER_OF_EXERCISES_IN_EXAM / 2, currentEpisodeExercises.length - NUMBER_OF_EXERCISES_IN_EXAM / 2);
        otherExercises.splice(NUMBER_OF_EXERCISES_IN_EXAM / 2, otherExercises.length - NUMBER_OF_EXERCISES_IN_EXAM / 2);
      }
      // merge the two arrays together
      examExercises = currentEpisodeExercises.concat(otherExercises);
      return {
        exercises: examExercises,
        exercisesArray: createExercisesArray(examExercises, 'exam')
      };
    });
  });
}
