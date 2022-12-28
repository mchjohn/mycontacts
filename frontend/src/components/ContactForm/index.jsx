/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { isEmailValid } from '../../utils/isEmailValid';
import { formatPhone } from '../../utils/formatPhone';

import CategoriesService from '../../services/CategoriesService';

import { useErrors } from '../../hooks/useErros';

import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';

import { Form, ButtonContainer } from './styles';

export function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

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

    onSubmit({
      name, email, phone, categoryId,
    });
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch {} finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

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

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          disabled={isLoadingCategories}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">Without category</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
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
  onSubmit: PropTypes.func.isRequired,
};
