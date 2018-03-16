const trimPunct = string => {
  // eslint-disable-next-line
  const allExceptPunct = /[$／↗‘Œ.,\/#!?%\^&\*;:{}=\-_`~()。？！–•…@€£+~<>，；：'"＂、“”（）《》％·’]|\s/g;
  return string.replace(allExceptPunct, '');
};

export default trimPunct;
