const ContactsRepository = require('../repositories/ContactsRepository');

class ContractController {
  /**
   * @index List all registers
   */
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  /**
   * @show List one register
   */
  async show(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) res.status(404).json({ error: 'Contact not found' });

    res.json(contact);
  }

  /**
   * @store Create one new register
   */
  async store(req, res) {
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) return res.status(400).json({ error: 'Name is required' });

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) return res.status(400).json({ error: 'This e-mail is already been taken' });

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    return res.send(contact);
  }

  /**
   * @update Updated one register
   */
  update() {

  }

  /**
   * @delete Delete one register
   */
  async delete(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) return res.status(404).json({ error: 'Contact not found' });

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
