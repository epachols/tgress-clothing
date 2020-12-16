import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hz69xG0q3CThIcRaMIeOflucA9JsUgvIjNzXMsAtdeZ0z4TiUvoZAFzOaXcNlZEmgIQyK0j3pCcjfLHX2w5nggm00wvmzFP9O";

  const onToken = token => {
        console.log(token);
        alert('Payment Successful!')
    }
  return <StripeCheckout 
   label="Pay Now" 
   name="Tgress Clothing Co." 
   billingAddress
   shippingAddress
   image='https://svgshare.com/i/CUz.svg'
   description={`Your total is $${price}`}
   amount={priceForStripe}
   panelLabel='Pay Now'
   token={onToken}
   stripeKey={publishableKey}

  />;
};

export default StripeCheckoutButton