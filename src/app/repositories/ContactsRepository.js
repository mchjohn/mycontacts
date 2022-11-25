const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Cris Cardoso',
    email: 'cris@cardoso.com',
    phone: '21990889001',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Brenda Stephanie',
    email: 'brenda@stephanie.com',
    phone: '21999999900',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'James Smith',
    email: 'james@smith.com',
    phone: '21990909111',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }
}

module.exports = new ContactsRepository();
