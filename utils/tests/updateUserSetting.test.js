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

  it('finds Chinese family and given name for familyName setting', () => {
    expect(updateUserSetting({ nationality: 'FRA' }, 'familyName', 'Astier'))
      .to.deep.equal({
        familyName: 'Astier',
        nationality: 'FRA',
        chineseFamilyName: '安',
        chineseGivenName: '杰'
      });
    expect(updateUserSetting({ nationality: 'SWE' }, 'familyName', 'Björkstén'))
      .to.deep.equal({
        familyName: 'Björkstén',
        nationality: 'SWE',
        chineseFamilyName: '白',
        chineseGivenName: '瑞'
      });
  });

  it('returns 谢 as default chineseFamilyName if familyName not supported', () => {
    expect(updateUserSetting({ nationality: 'SWE' }, 'familyName', 'Jackson'))
      .to.deep.equal({
        familyName: 'Jackson',
        nationality: 'SWE',
        chineseFamilyName: '谢',
        chineseGivenName: '瑞'
      });
  });

  it('returns 杰 as default chineseGivenName if nationality not supported', () => {
    expect(updateUserSetting({ nationality: 'SWE' }, 'familyName', 'Jackson'))
      .to.deep.equal({
        familyName: 'Jackson',
        nationality: 'SWE',
        chineseFamilyName: '谢',
        chineseGivenName: '瑞'
      });
  });
});
