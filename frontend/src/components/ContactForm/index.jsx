import { useState } from 'react';
import PropTypes from 'prop-types';

import { isEmailValid } from '../../utils/isEmailValid';
import { formatPhone } from '../../utils/formatPhone';

import { useErrors } from '../../hooks/useErros';

import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';

import { Form, ButtonContainer } from './styles';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Name is required' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail is invalid' });
    } else {
      removeError('email');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Name*"
          value={name}
          error={getErrorMessageByFieldName('name')}
          onChange={(event) => handleNameChange(event)}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          error={getErrorMessageByFieldName('email')}
          onChange={(event) => handleEmailChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Phone"
          value={phone}
          maxLength={15}
          onChange={(event) => handlePhoneChange(event)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="github">github</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
