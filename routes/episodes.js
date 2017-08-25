import authenticate from '../middlewares/authenticate';
import EpisodesGetter from '../services/episodes-getter';
import EpisodeSerializer from '../serializers/episode';
import DialogsGetter from '../services/dialogs-getter';
import DialogSerializer from '../serializers/dialog';
import CharactersGetter from '../services/characters-getter';
import CharacterSerializer from '../serializers/character';
import GrammarsGetter from '../services/grammars-getter';
import GrammarSerializer from '../serializers/grammar';
import MapDataGetter from '../services/map-data-getter';
import MapDataSerializer from '../serializers/mapData';

function list(request, response, next) {
  EpisodesGetter()
    .then(episodes => EpisodeSerializer.serialize(episodes))
    .then(episodes => response.send(episodes))
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

function map(request, response, next) {
  MapDataGetter(request.params.id, request.currentUser.id)
    .then(mapData => MapDataSerializer.serialize(mapData))
    .then(mapData => response.send(mapData))
    .catch(next);
}

module.exports = app => {
  app.get('/api/episodes', authenticate, list);
  app.get('/api/episode/:id/dialogs', authenticate, listDialogs);
  app.get('/api/episode/:id/characters', authenticate, listCharacters);
  app.get('/api/episode/:id/grammars', authenticate, listGrammars);
  app.get('/api/episodes/:id/map', authenticate, map);
};
