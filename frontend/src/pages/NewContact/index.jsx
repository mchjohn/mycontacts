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

      const response = await ContactsService.createContact(contact);

      console.log('Response', response);
    } catch (error) {
      console.log('Error', error);
    }
  }

  return (
    <>
      <PageHeader title="New contact" />

      <ContactForm buttonLabel="Register" onSubmit={handleSubmit} />
    </>
  );
}
