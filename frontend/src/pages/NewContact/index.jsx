import { useRef } from 'react';

import { toast } from '../../utils/toast';
import ContactsService from '../../services/ContactsService';

import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';

export default function NewContact() {
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

  return (
    <>
      <PageHeader title="New contact" />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Register"
        onSubmit={handleSubmit}
      />
    </>
  );
}
