import EpisodesGetter from '../services/episodes-getter';
import EpisodeSerializer from '../serializers/episode';
import DialogsGetter from '../services/dialogs-getter';
import DialogSerializer from '../serializers/dialog';
import CharactersGetter from '../services/characters-getter';
import CharacterSerializer from '../serializers/character';
import GrammarsGetter from '../services/grammars-getter';
import GrammarSerializer from '../serializers/grammar';
import MapDataGetter from '../services/map-data-getter';

function list(request, response, next) {
  EpisodesGetter()
    .then(episodes => EpisodeSerializer.serialize(episodes))
    .then(episodes => response.send(episodes))
    .catch(next);
}

function listDialogs(request, response, next) {
  DialogsGetter(request.params.id)
    .then(dialogs => DialogSerializer.serialize(dialogs))
    .then(dialogs => response.send(dialogs))
    .catch(next);
}

function listCharacters(request, response, next) {
  CharactersGetter(request.params.id)
    .then(characters => CharacterSerializer.serialize(characters))
    .then(characters => response.send(characters))
    .catch(next);
}

function listGrammars(request, response, next) {
  GrammarsGetter(request.params.id)
    .then(grammars => GrammarSerializer.serialize(grammars))
    .then(grammars => response.send(grammars))
    .catch(next);
}

function map(request, response, next) {
  MapDataGetter(request.params.id)
    .then(data => response.send(data))
    .catch(next);
}

module.exports = app => {
  app.get('/api/episodes', list);
  app.get('/api/episode/:id/dialogs', listDialogs);
  app.get('/api/episode/:id/characters', listCharacters);
  app.get('/api/episode/:id/grammars', listGrammars);
  app.get('/api/episodes/:id/map', map);
};
