import models from '../models';
import stripePackage from 'stripe';

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

export default function StripeChargeCreator(data, userId) {
  // Create a charge
  return stripe.charges.create({
    source: data.source,
    amount: data.amount,
    currency: 'usd',
    description: 'Charge for ' + data.email,
    metadata: {
      product: data.productName
    }
  })
  .then(charge => {
    // TODO: Then, Update user permission
    // Need to create a userSeason record
    return charge;
  });
}
