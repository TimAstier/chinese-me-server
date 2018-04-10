import optionalAuthenticate from '../middlewares/optionalAuthenticate';
import CharactersGetter from '../services/characters-getter';
import CharacterSerializer from '../serializers/character';
import EpisodeGetter from '../services/episode-getter';
import EpisodesGetter from '../services/episodes-getter';
import EpisodeSerializer from '../serializers/episode';
import DialogsGetter from '../services/dialogs-getter';
import MapDataGetter from '../services/map-data-getter';
import MapDataSerializer from '../serializers/mapData';

function get(request, response, next) {
  EpisodeGetter(request.params, request.currentUser.id)
    .then(episode => EpisodeSerializer.serialize(episode))
    .then(episode => response.send(episode))
    .catch(next);
}

function list(request, response, next) {
  EpisodesGetter(request.currentUser.id)
    .then(episodes => EpisodeSerializer.serialize(episodes))
    .then(episodes => response.send(episodes))
    .catch(next);
}

function listCharacters(request, response, next) {
  CharactersGetter(request.params.id, request.currentUser.id)
    .then(characters => CharacterSerializer.serialize(characters))
    .then(characters => response.send(characters))
    .catch(next);
}


function map(request, response, next) {
  MapDataGetter(request.params.id, request.currentUser.id)
    .then(mapData => MapDataSerializer.serialize(mapData))
    .then(mapData => response.send(mapData))
    .catch(next);
}

function listDialogs(request, response, next) {
  DialogsGetter(request.params.id)
    .then(episode => EpisodeSerializer.serialize(episode))
    .then(episode => response.send(episode))
    .catch(next);
}

module.exports = app => {
  app.get('/api/season/:seasonNumber/episode/:episodeNumber', optionalAuthenticate, get);
  app.get('/api/episodes', optionalAuthenticate, list);
  app.get('/api/episode/:id/characters', optionalAuthenticate, listCharacters);
  app.get('/api/episodes/:id/map', optionalAuthenticate, map);
  app.get('/api/episode/:id/dialogs', optionalAuthenticate, listDialogs);
};
