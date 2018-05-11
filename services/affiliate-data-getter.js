import models from '../models';

const AFFILIATE_CUT = 0.3;
const AFFILIATE_TIME_LIMIT_DAYS = 365;
const ONE_DAY = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

export default function DialogsGetter(request) {
  const affiliateName = request.params.name;
  return models.affiliate
    .findOne({
      where: { name: affiliateName },
      include: [{
        model: models.refCode,
        attributes: ['value'],
        include: [{
          model: models.user,
          include: [{
            model: models.userSeason,
            required: false,
            where: {
              purchased: true
            }
          }]
        }]
      }]
    })
    .then(affiliate => {
      if (!affiliate) {
        throw { status: 404, message: 'affiliate_not_found' };
      }
      let usersCount = 0;
      let totalPurchaseAmount = 0;
      const codes = [];
      affiliate.refCodes.forEach(code => {
        const codeData = {
          value: code.value,
          referred_users: 0,
          balance: 0
        };
        usersCount = usersCount + code.users.length;
        codeData.referredUsers = code.users.length;
        code.users.forEach(user => {
          const refDate = user.refDate ? user.refDate : new Date();
          user.userSeasons.forEach( userSeason => {
            if (userSeason.purchased === true && userSeason.paidPrice) {
              const daysSinceRef = Math.round(Math.abs((refDate.getTime() - userSeason.createdAt.getTime()) / (ONE_DAY)));
              if (daysSinceRef < AFFILIATE_TIME_LIMIT_DAYS) {
                totalPurchaseAmount = totalPurchaseAmount + userSeason.paidPrice;
                codeData.balance = codeData.balance + userSeason.paidPrice * AFFILIATE_CUT;
              }
            }
          });
        });
        codeData.balance = '$' + codeData.balance;
        codes.push(codeData);
      });
      return {
        name: affiliate.name,
        total_referred_users: usersCount,
        total_purchase_amount: `$${totalPurchaseAmount}`,
        total_balance: `$${totalPurchaseAmount * AFFILIATE_CUT}`,
        codes
      };
    });
}
