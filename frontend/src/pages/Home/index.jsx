/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';

import { useHome } from './useHome';

import edit from '../../assets/images/icons/edit.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import alert from '../../assets/images/icons/alert.svg';
import errorIcon from '../../assets/images/icons/error.svg';
import emptySearch from '../../assets/images/icons/empty-search.svg';

import { Modal } from '../../components/Modal';
import { Loader } from '../../components/Loader';
import { Button } from '../../components/Button';

import {
  Container,
  InputSearchContainer,
  Header,
  ListHeader,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';

export default function Home() {
  const {
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
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

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

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Search contact..."
            value={searchTerm}
            onChange={handleSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header justifyContent={hasError ? 'flex-end' : spaceBetweenOrCenter}>
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <Link to="/new">New contact</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={errorIcon} alt="alert signal" />
          <div className="details">
            <strong>An error occurred while to get your contacts.</strong>

            <Button type="button" onClick={handleTryAgain}>
              Try again
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={alert} alt="alert signal" />

              <p>
                You do not have any registered contacts.
              </p>
              <p>
                Click on <strong> &ldquo;New contact&ldquo; </strong>
                to register a contact.
              </p>
            </EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFoundContainer>
              <img src={emptySearch} alt="Magnifying glass" />
              <span>No results were found for <strong>&ldquo;{searchTerm}&ldquo;</strong>.</span>
            </SearchNotFoundContainer>
          )}

          {filteredContacts.length > 0 && (
            <ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
                <span>Name</span>
                <img src={arrow} alt="Arrow" />
              </button>
            </ListHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category.name
                    && <small>{contact.category.name}</small>}
                </div>

                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="pencil with square" />
                </Link>

                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img src={trash} alt="trash" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}
