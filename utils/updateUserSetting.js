// HOW-TO: add a new setting
// 1. Create new column in userSettings table (migration)
// 2. Create the constants on the client
// 3. Update userSetting model

const namesMap = {
  A: '安',
  B: '白',
  // C: '',
  D: '杜',
  // E: '',
  F: '馮',
  G: '高',
  H: '和',
  // I: '',
  // J: '',
  // K: '',
  L: '李',
  M: '马',
  N: '倪',
  O: '區',
  P: '番',
  // Q: '',
  R: '冉',
  S: '宋',
  T: '田',
  // U: '',
  // V: '',
  W: '文',
  // X: '',
  Y: '易',
  Z: '周'
};

const findChineseFamilyName = familyName => {
  const firstLetter = familyName.split('')[0].toUpperCase();
  return namesMap[firstLetter] || '谢';
};

const findChineseGivenName = (nationality, gender) => {
  // TODO: should also depend on gender
  switch (nationality) {
    case 'USA': return gender === 'Male' ? '杰' : '美';
    case 'GBR': return gender === 'Male' ? '杰' : '英';
    case 'FRA': return gender === 'Male' ? '杰' : '丽';
    case 'SWE': return '瑞';
    case 'DEU': return '德';
    default: return '杰';
  }
};

const updateUserSetting = (userSetting, setting, value) => {
  userSetting[setting] = value;
  if (setting === 'gender') {
    userSetting.chineseFamilyName = findChineseFamilyName(userSetting.familyName);
    userSetting.chineseGivenName =
      findChineseGivenName(userSetting.nationality, value);
  }
  return userSetting;
};

export default updateUserSetting;
