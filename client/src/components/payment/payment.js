import React, {Compoent} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Compoent{
    render(){
        return(
          <StripeCheckout 
          amount = {500}
          token ={token=> console.log(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          />
        )
    }
}

export default Payment;

