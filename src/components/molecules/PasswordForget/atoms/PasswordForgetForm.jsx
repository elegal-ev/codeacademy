import React from 'react';
import Input from '../../../atoms/Input';
import Button from '../../../atoms/Button';

const PasswordForgetForm = ({
  onSubmit,
  onChange,
  isInvalid,
  error,
  email,
  className,
}) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      <Input
        name="email"
        value={email}
        onChange={onChange}
        labelName="Email Adresse"
        type="text"
        required
      />

      <Button
        disabled={isInvalid}
        type="submit"
        text="Passwort zurücksetzen"
      />

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default PasswordForgetForm;
