/* eslint-disable react/jsx-one-expression-per-line */
import { Loader } from '../../components/Loader';

import { useHome } from './useHome';

import { Header } from './components/Header';
import { InputSearch } from './components/InputSearch';
import { ErrorStatus } from './components/ErrorStatus';
import { EmptyListContainer } from './components/EmptyListContainer';
import { SearchNotFoundContainer } from './components/SearchNotFoundContainer';

import {
  Container,
} from './styles';
import { ContactsList } from './components/ContactsList';
import { Modal } from '../../components/Modal';

export default function Home() {
  const {
    orderBy,
    searchTerm,
    contactBeingDeleted,

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
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearch value={searchTerm} onChange={handleSearchTerm} />
      )}

      <Header
        hasError={hasError}
        quantityOfContacts={contacts.length}
        quantityOfFilteredContacts={filteredContacts.length}
      />

      {hasError && (
        <ErrorStatus onTryAgain={handleTryAgain} />
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer />
          )}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFoundContainer searchTerm={searchTerm} />
          )}

          <ContactsList
            orderBy={orderBy}
            isLoadingDelete={isLoadingDelete}
            filteredContacts={filteredContacts}
            contactBeingDeleted={contactBeingDeleted}
            isModalDeleteVisible={isModalDeleteVisible}
            onDeleteContact={handleDeleteContact}
            onToggleOrderBy={handleToggleOrderBy}
            onCloseDeleteModal={handleCloseDeleteModal}
            onConfirmDeleteContact={handleConfirmDeleteContact}
          />

          <Modal
            danger
            confirmLabel="Delete"
            isLoading={isLoadingDelete}
            visible={isModalDeleteVisible}
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
            title={`Do you really want to delete the contact "${contactBeingDeleted?.name}"?`}
          >
            <p>This action cannot be undone.</p>
          </Modal>
        </>
      )}
    </Container>
  );
}
