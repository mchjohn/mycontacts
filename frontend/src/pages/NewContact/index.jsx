import { toast } from '../../utils/toast';

import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await ContactsService.createContact(contact);

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

      <ContactForm buttonLabel="Register" onSubmit={handleSubmit} />
    </>
  );
}
