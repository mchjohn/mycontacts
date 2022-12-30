import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import { toast } from '../../utils/toast';
import ContactsService from '../../services/ContactsService';

export function useHome() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  function handleDeleteContact(contact) {
    setContactBeingDeleted(contact);
    setIsModalDeleteVisible(true);
  }

  function handleCloseDeleteModal() {
    setIsModalDeleteVisible(false);
    setContactBeingDeleted(null);
  }

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true);

      await ContactsService.deleteContact(contactBeingDeleted.id);

      setContacts((prevState) => prevState.filter(
        (contact) => contact.id !== contactBeingDeleted.id,
      ));

      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Contact successfully deleted.',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Error when trying to delete contact.',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  const spaceBetweenOrCenter = contacts.length > 0 ? 'space-between' : 'center';

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  return {
    orderBy,
    searchTerm,
    contactBeingDeleted,
    spaceBetweenOrCenter,

    contacts,
    filteredContacts,

    hasError,
    isLoading,
    isLoadingDelete,
    isModalDeleteVisible,

    handleTryAgain,
    handleSearchTerm,
    handleToggleOrderBy,
    handleDeleteContact,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
  };
}
