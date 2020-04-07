import React from 'react';

import SignInForm from "./SignInForm";
import {withFirebase} from '../Firebase'

const SignIn = () => withFirebase(<SignInForm />)

export default SignIn;
