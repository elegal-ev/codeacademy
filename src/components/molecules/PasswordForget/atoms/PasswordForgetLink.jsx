import React from 'react';
import { PASSWORD_FORGET } from '../../../../constants/routes';
import { Link } from 'gatsby';

const PasswordForgetLink = () => (
  <p>
    <Link to={PASSWORD_FORGET}>Password vergerssen?</Link>
  </p>
);

export default PasswordForgetLink;
