import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import ContactsService from '../../services/ContactsService';

import edit from '../../assets/images/icons/edit.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';

import { Loader } from '../../components/Loader';

import {
  Container, InputSearchContainer, Header, ListHeader, Card,
} from './styles';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.listContacts(orderBy);

        setContacts(contactsList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          type="text"
          placeholder="Search contact..."
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">New contact</Link>
      </Header>

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
              {contact.category_name
                  && <small>{contact.category_name}</small>}
            </div>

            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="pencil with square" />
            </Link>

            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}