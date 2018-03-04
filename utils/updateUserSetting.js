// HOW-TO: add a new setting
// 1. Create new column in userSettings table (migration)
// 2. Create the constants on the client
// 3. Update userSetting model

import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

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
  switch (nationality) {
    case 'USA': return gender === 'Male' ? '杰' : '美';
    case 'GBR': return gender === 'Male' ? '杰' : '英';
    case 'FRA': return gender === 'Male' ? '杰' : '丽';
    case 'SWE': return '瑞';
    case 'DEU': return '德';
    default: return '杰';
  }
};

const standardizeValue = (setting, value) => {
  switch (setting) {
    case 'givenName':
    case 'familyName': return capitalizeFirstLetter(value);
    default: return value;
  }
};

const updateUserSetting = (userSetting, setting, userInput) => {
  const standardizedValue = standardizeValue(setting, userInput);
  userSetting[setting] = standardizedValue;
  if (setting === 'gender') {
    userSetting.chineseFamilyName = findChineseFamilyName(userSetting.familyName);
    userSetting.chineseGivenName =
      findChineseGivenName(userSetting.nationality, standardizedValue);
  }
  return userSetting;
};

export default updateUserSetting;
