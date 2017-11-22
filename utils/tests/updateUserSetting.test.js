import updateUserSetting from '../updateUserSetting';
import { expect } from 'chai';

describe('updateUserSetting', () => {
  it('updates given setting with value', () => {
    const userSetting = {};
    const setting = 'age';
    const value = 42;
    expect(updateUserSetting(userSetting, setting, value))
      .to.deep.equal({ age: 42 });
  });

  it('finds Chinese family and given name for gender setting', () => {
    expect(updateUserSetting({ nationality: 'FRA', familyName: 'Astier' }, 'gender', 'Male'))
      .to.deep.equal({
        familyName: 'Astier',
        nationality: 'FRA',
        gender: 'Male',
        chineseFamilyName: '安',
        chineseGivenName: '杰'
      });
    expect(updateUserSetting({ nationality: 'SWE', familyName: 'Sun' }, 'gender', 'Female'))
      .to.deep.equal({
        familyName: 'Sun',
        nationality: 'SWE',
        gender: 'Female',
        chineseFamilyName: '宋',
        chineseGivenName: '瑞'
      });
  });

  it('returns 谢 as default chineseFamilyName if familyName not supported', () => {
    expect(updateUserSetting({ nationality: 'SWE', familyName: 'Jackson' }, 'gender', 'Male'))
      .to.deep.equal({
        familyName: 'Jackson',
        nationality: 'SWE',
        gender: 'Male',
        chineseFamilyName: '谢',
        chineseGivenName: '瑞'
      });
  });

  it('returns 杰 as default chineseGivenName if nationality not supported', () => {
    expect(updateUserSetting({ nationality: 'SWE', familyName: 'Jackson' }, 'gender', 'Male'))
      .to.deep.equal({
        familyName: 'Jackson',
        nationality: 'SWE',
        gender: 'Male',
        chineseFamilyName: '谢',
        chineseGivenName: '瑞'
      });
  });

  it('returns a different chineseGivenName base on gender', () => {
    expect(updateUserSetting({ nationality: 'FRA', familyName: 'Astier' }, 'gender', 'Male'))
      .to.deep.equal({
        familyName: 'Astier',
        nationality: 'FRA',
        gender: 'Male',
        chineseFamilyName: '安',
        chineseGivenName: '杰'
      });
    expect(updateUserSetting({ nationality: 'FRA', familyName: 'Astier' }, 'gender', 'Female'))
      .to.deep.equal({
        familyName: 'Astier',
        nationality: 'FRA',
        gender: 'Female',
        chineseFamilyName: '安',
        chineseGivenName: '丽'
      });
  });
});
