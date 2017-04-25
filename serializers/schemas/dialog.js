module.exports = {
  ref: 'id',
  attributes: ['id', 'title', 'lines'],
  keyForAttribute: 'camelCase',
  lines: {
    ref: 'id',
    attributes: ['id', 'avatar', 'name', 'meta', 'text', 'lineDialog'],
    include: false
  }
};
