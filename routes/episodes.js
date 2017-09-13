import authenticate from '../middlewares/authenticate';
import EpisodeGetter from '../services/episode-getter';
import EpisodesGetter from '../services/episodes-getter';
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
import MapDataGetter from '../services/map-data-getter';
import MapDataSerializer from '../serializers/mapData';
import ReviewExercisesGetter from '../services/review-exercises-getter.js';
import ReviewSerializer from '../serializers/review';

function list(request, response, next) {
  EpisodesGetter(request.currentUser.id)
    .then(episodes => EpisodeSerializer.serialize(episodes))
    .then(episodes => response.send(episodes))
    .catch(next);
}

function get(request, response, next) {
  EpisodeGetter(request.params.id)
    .then(episode => EpisodeSerializer.serialize(episode))
    .then(episode => response.send(episode))
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

function review(request, response, next) {
  ReviewExercisesGetter(request.params.id)
    .then(episode => ReviewSerializer.serialize(episode))
    .then(episode => response.send(episode))
    .catch(next);
}

function map(request, response, next) {
  MapDataGetter(request.params.id, request.currentUser.id)
    .then(mapData => MapDataSerializer.serialize(mapData))
    .then(mapData => response.send(mapData))
    .catch(next);
}

module.exports = app => {
  app.get('/api/episodes', authenticate, list);
  app.get('/api/episode/:id', get);
  app.get('/api/episode/:id/dialogs', authenticate, listDialogs);
  app.get('/api/episode/:id/characters', authenticate, listCharacters);
  app.get('/api/episode/:id/grammars', authenticate, listGrammars);
  app.get('/api/episode/:id/multipleChoices', authenticate, listMultipleChoices);
  app.get('/api/episode/:id/audioToTexts', authenticate, listAudioToTexts);
  app.get('/api/episode/:id/review', authenticate, review);
  app.get('/api/episodes/:id/map', authenticate, map);
};
