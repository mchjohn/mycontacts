import { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { toast } from '../../utils/toast';
import ContactsService from '../../services/ContactsService';

import { useIsMounted } from '../../hooks/useIsMounted';

import Presentation from './Presentation';

export default function Container() {
  const { id } = useParams();
  const history = useHistory();

  const contactFormRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const isMounted = useIsMounted();

  async function handleSubmit(contact) {
    try {
      const contactData = await ContactsService.updateContact(id, contact);

      setContactName(contactData.name);

      toast({
        type: 'success',
        text: 'Contact successfully updated',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Error when trying to update contact',
      });
    }
  }

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        if (isMounted()) {
          contactFormRef.current.setFieldValues(contact);

          setIsLoading(false);
          setContactName(contact.name);
        }
      } catch {
        if (isMounted()) {
          history.push('/');
          toast({
            type: 'danger',
            text: 'Contact not found',
          });
        }
      }
    }

    loadContact();
  }, [history, id, isMounted]);

  return (
    <Presentation
      isLoading={isLoading}
      contactName={contactName}
      contactFormRef={contactFormRef}
      onSubmit={handleSubmit}
    />
  );
}
