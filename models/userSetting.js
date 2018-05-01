module.exports = (sequelize, DataTypes) => {
  const models = sequelize.models;

  const UserSetting = sequelize.define('userSetting', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    giftCode: { type: DataTypes.BOOLEAN, defaultValue: false },
    etymologyVideo: { type: DataTypes.BOOLEAN },
    calligraphyVideo: { type: DataTypes.BOOLEAN },
    familyName: { type: DataTypes.STRING },
    givenName: { type: DataTypes.STRING },
    nationality: { type: DataTypes.STRING },
    chineseFamilyName: { type: DataTypes.STRING },
    chineseGivenName: { type: DataTypes.STRING },
    gender: { type: DataTypes.ENUM('Female', 'Male') },
    birthdate: { type: DataTypes.DATE },
    reasonLearnChinese: { type: DataTypes.STRING },
    motherTongue: { type: DataTypes.STRING },
    otherLanguage: { type: DataTypes.STRING }
  }, {
    timestamps: true
  });

  UserSetting.associate = () => {
    UserSetting.belongsTo(models.user);
  };

  return UserSetting;
};
