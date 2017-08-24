const mapDataSchema = {
  ref: 'id',
  attributes: [
    'id',
    'dialogs',
    'characters',
    'grammars'
  ],
  keyForAttribute: 'camelCase',
  transform: record => {
    record.characters.forEach((c, i) => {
      record.characters[i] = {
        id: c.id,
        simpChar: c.simpChar,
        completed: c.userCharacters.length !== 0
      };
    });
    record.dialogs.forEach((d, i) => {
      record.dialogs[i] = {
        id: d.id,
        title: d.title,
        completed: d.userDialogs.length !== 0
      };
    });
    record.grammars.forEach((g, i) => {
      record.grammars[i] = {
        id: g.id,
        title: g.title,
        completed: g.userGrammars.length !== 0
      };
    });
    return record;
  }
};

export default mapDataSchema;
