/* eslint-disable react/jsx-one-expression-per-line */
import { Header } from './components/Header';
import { Modal } from '../../components/Modal';
import { Loader } from '../../components/Loader';
import { InputSearch } from './components/InputSearch';
import { ErrorStatus } from './components/ErrorStatus';
import { EmptyListContainer } from './components/EmptyListContainer';
import { SearchNotFoundContainer } from './components/SearchNotFoundContainer';

import {
  Container,
} from './styles';

import { useHome } from './useHome';
import { ContactsList } from './components/ContactsList';

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

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && <InputSearch value={searchTerm} onChange={handleSearchTerm} />}

      <Header
        hasError={hasError}
        quantityOfContacts={contacts.length}
        quantityOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

      {isListEmpty && <EmptyListContainer />}

      {isSearchEmpty && <SearchNotFoundContainer searchTerm={searchTerm} />}

      {hasContacts && (
        <>
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
