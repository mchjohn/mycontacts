import { useRef } from 'react';

import { toast } from '../../utils/toast';
import ContactsService from '../../services/ContactsService';

export function useNewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contact successfully registered',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Error when trying to register contact',
      });
    }
  }

  return { contactFormRef, handleSubmit };
}
