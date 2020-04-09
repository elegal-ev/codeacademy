import React from 'react';
import Input from '../../../atoms/Input';
import Button from '../../../atoms/Button';

const PasswordChangeForm = ({
  isInvalid,
  error,
  passwordOne,
  passwordTwo,
  onSubmit,
  onChange,
  className,
}) => {
  return (
    <form className={className} onSubmit={(e) => onSubmit(e)}>
      <Input
        name="passwordOne"
        value={passwordOne}
        onChange={(e) => onChange(e)}
        type="password"
        labelName="Neues Passwort"
        required
      />
      <Input
        name="passwordTwo"
        value={passwordTwo}
        onChange={(e) => onChange(e)}
        type="password"
        labelName="Bestätigen Sie das neue Passwort"
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

export default PasswordChangeForm;
