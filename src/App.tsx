import React from 'react';
import Amplify from '@aws-amplify/core';
import awsmobile from './aws-exports';

import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsmobile);

const App = () => {
  return (
    <h1>HelloWorld</h1>
  )
}

// @ts-ignore
export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
  }
})
