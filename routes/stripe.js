import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import StripeChargeCreator from '../services/stripe-charge-creator';

function chargeCustomer(request, response, next) {
  StripeChargeCreator(request.body, request.currentUser.id)
    .then(charge => response.json(charge))
    .catch(err => {
      console.log('Error:', err);
      res.status(500).send({error: 'Purchase Failed'});
    })
    .catch(next);
}

module.exports = app => {
  app.post('/api/stripe-payment', ensureAuthenticated, chargeCustomer);
};
