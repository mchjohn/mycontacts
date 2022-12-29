import { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { toast } from '../../utils/toast';
import ContactsService from '../../services/ContactsService';

import { Loader } from '../../components/Loader';
import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';

export default function EditContact() {
  const { id } = useParams();
  const history = useHistory();

  const contactFormRef = useRef(null);
  const [contactName, setContactName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function handleSubmit() {
    // TODO:
  }

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        contactFormRef.current.setFieldValues(contact);

        setIsLoading(false);
        setContactName(contact.name);
      } catch {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contact not found',
        });
      }
    }

    loadContact();
  }, [history, id]);

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Loading...' : `Edit ${contactName}`} />

      <ContactForm
        ref={contactFormRef}
        onSubmit={handleSubmit}
        buttonLabel="Save changes"
      />
    </>
  );
}
