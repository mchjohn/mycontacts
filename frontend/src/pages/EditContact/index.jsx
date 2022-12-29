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
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

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
