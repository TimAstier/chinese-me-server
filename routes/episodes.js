import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import optionalAuthenticate from '../middlewares/optionalAuthenticate';
import EpisodeGetter from '../services/episode-getter';
import EpisodesGetter from '../services/episodes-getter';
import BookSerializer from '../serializers/book';
import EpisodeSerializer from '../serializers/episode';
import DialogsGetter from '../services/dialogs-getter';
import DialogSerializer from '../serializers/dialog';
import CharactersGetter from '../services/characters-getter';
import CharacterSerializer from '../serializers/character';
import GrammarsGetter from '../services/grammars-getter';
import GrammarSerializer from '../serializers/grammar';
import MultipleChoicesGetter from '../services/multiple-choices-getter';
import MultipleChoiceSerializer from '../serializers/multipleChoice';
import AudioToTextsGetter from '../services/audio-to-texts-getter';
import AudioToTextSerializer from '../serializers/audioToText';
import VideosGetter from '../services/videos-getter';
import VideoSerializer from '../serializers/video';
import MapDataGetter from '../services/map-data-getter';
import MapDataSerializer from '../serializers/mapData';
import ReviewExercisesGetter from '../services/review-exercises-getter.js';
import ReviewSerializer from '../serializers/review';
import ScoreUpdator from '../services/score-updator.js';
import EpisodeUnlocker from '../services/episode-unlocker.js';
import ExamExercisesGetter from '../services/exam-exercises-getter.js';
import ExamSerializer from '../serializers/exam';

function get(request, response, next) {
  EpisodeGetter(request.params)
    .then(episode => BookSerializer.serialize(episode))
    .then(episode => response.send(episode))
    .catch(next);
}

function list(request, response, next) {
  EpisodesGetter(request.currentUser.id)
    .then(episodes => EpisodeSerializer.serialize(episodes))
    .then(episodes => response.send(episodes))
    .catch(next);
}

function map(request, response, next) {
  MapDataGetter(request.params.id, request.currentUser.id)
    .then(mapData => MapDataSerializer.serialize(mapData))
    .then(mapData => response.send(mapData))
    .catch(next);
}

function listDialogs(request, response, next) {
  DialogsGetter(request.params.id, request.currentUser.id)
    .then(dialogs => DialogSerializer.serialize(dialogs))
    .then(dialogs => response.send(dialogs))
    .catch(next);
}

function listCharacters(request, response, next) {
  CharactersGetter(request.params.id, request.currentUser.id)
    .then(characters => CharacterSerializer.serialize(characters))
    .then(characters => response.send(characters))
    .catch(next);
}

function listGrammars(request, response, next) {
  GrammarsGetter(request.params.id, request.currentUser.id)
    .then(grammars => GrammarSerializer.serialize(grammars))
    .then(grammars => response.send(grammars))
    .catch(next);
}

function listMultipleChoices(request, response, next) {
  MultipleChoicesGetter(request.params.id)
    .then(multipleChoices => MultipleChoiceSerializer.serialize(multipleChoices))
    .then(multipleChoices => response.send(multipleChoices))
    .catch(next);
}

function listAudioToTexts(request, response, next) {
  AudioToTextsGetter(request.params.id)
    .then(audioToTexts => AudioToTextSerializer.serialize(audioToTexts))
    .then(audioToTexts => response.send(audioToTexts))
    .catch(next);
}

function listVideos(request, response, next) {
  VideosGetter(request.params.id)
    .then(videos => VideoSerializer.serialize(videos))
    .then(videos => response.send(videos))
    .catch(next);
}

function review(request, response, next) {
  ReviewExercisesGetter(request.params.id)
    .then(episode => ReviewSerializer.serialize(episode))
    .then(episode => response.send(episode))
    .catch(next);
}

function exam(request, response, next) {
  ExamExercisesGetter(request.params.id)
    .then(episode => ExamSerializer.serialize(episode))
    .then(episode => response.send(episode))
    .catch(next);
}

function examCompleted(request, response, next) {
  ScoreUpdator(request)
    .then(() => EpisodeUnlocker(request))
    .then(result => response.send(result))
    .catch(next);
}

module.exports = app => {
  app.get('/api/season/:seasonNumber/episode/:episodeNumber', get);
  app.get('/api/episodes', optionalAuthenticate, list);
  app.get('/api/episodes/:id/map', optionalAuthenticate, map);
  app.get('/api/episode/:id/dialogs', ensureAuthenticated, listDialogs);
  app.get('/api/episode/:id/characters', ensureAuthenticated, listCharacters);
  app.get('/api/episode/:id/grammars', ensureAuthenticated, listGrammars);
  app.get('/api/episode/:id/multipleChoices', ensureAuthenticated, listMultipleChoices);
  app.get('/api/episode/:id/audioToTexts', ensureAuthenticated, listAudioToTexts);
  app.get('/api/episode/:id/videos', ensureAuthenticated, listVideos);
  app.get('/api/episode/:id/review', ensureAuthenticated, review);
  app.get('/api/episode/:id/exam', ensureAuthenticated, exam);
  app.post('/api/episode/exam/completed', ensureAuthenticated, examCompleted);
};
