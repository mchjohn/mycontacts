import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { toast } from '../../utils/toast';
import ContactsService from '../../services/ContactsService';

import { useIsMounted } from '../../hooks/useIsMounted';

export function useEditContact() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    const controller = new AbortController();

    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id, controller.signal);

        if (isMounted()) {
          contactFormRef.current.setFieldValues(contact);

          setIsLoading(false);
          setContactName(contact.name);
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;

        if (isMounted()) {
          navigate('/', { replace: true });
          toast({
            type: 'danger',
            text: 'Contact not found',
          });
        }
      }
    }

    loadContact(controller.signal);

    return () => {
      controller.abort();
    };
  }, [navigate, id, isMounted]);

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
