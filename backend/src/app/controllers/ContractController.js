const isValidUUID = require('../utils/isValidUUID');

const ContactsRepository = require('../repositories/ContactsRepository');

class ContractController {
  /**
   * @index List all registers
   */
  async index(req, res) {
    const { orderBy } = req.query;

    const contacts = await ContactsRepository.findAll(orderBy);

    res.json(contacts);
  }

  /**
   * @show List one register
   */
  async show(req, res) {
    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Contact not found, invalid id' });
    }

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    return res.json(contact);
  }

  /**
   * @store Create one new register
   */
  async store(req, res) {
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    return res.status(201).json(contact);
  }

  /**
   * @update Updated one register
   */
  async update(req, res) {
    const { id } = req.params;

    const {
      name, email, phone, category_id,
    } = req.body;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Contact not found, invalid id' });
    }

    const contactExists = await ContactsRepository.findById(id);
    if (!contactExists) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactEmailExists = await ContactsRepository.findByEmail(email);
    if (contactEmailExists && contactEmailExists.id !== id) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.update(
      id,
      {
        name,
        email,
        phone,
        category_id,
      },
    );

    return res.json(contact);
  }

  /**
   * @delete Delete one register
   */
  async delete(req, res) {
    const { id } = req.params;

    await ContactsRepository.delete(id);

    return res.sendStatus(204);
  }
}

/**
 * Singleton pattern: It guarantees the existence
 * of only one instance of a class, maintaining
 * a global point of access to its object.
 */
module.exports = new ContractController();
