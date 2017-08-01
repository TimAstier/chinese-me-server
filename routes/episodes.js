import EpisodesGetter from '../services/episodes-getter';
import EpisodeSerializer from '../serializers/episode';
import DialogsGetter from '../services/dialogs-getter';
import DialogSerializer from '../serializers/dialog';
import CharactersGetter from '../services/characters-getter';
import CharacterSerializer from '../serializers/character';

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

module.exports = app => {
  app.get('/api/episodes', list);
  app.get('/api/episode/:id/dialogs', listDialogs);
  app.get('/api/episode/:id/characters', listCharacters);
};
