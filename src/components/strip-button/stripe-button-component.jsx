import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51InRS7SEmh3tSfprj1auN8JUHmRSxnlvSQzBkj8DN5k6An3ys1uiDC2RPJuQN5zdFejS5r9dBSS2iliQbUImYVff00FdOLq0qu'
    


const onToken=token => {
    alert('Payment Succesfull')
}
return(
    <StripeCheckout 
      label='Pay Now'
      name= 'Skl Fashion'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
)
}

export default StripeCheckoutButton