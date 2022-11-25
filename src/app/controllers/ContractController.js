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
  show() {

  }

  /**
   * @store Create one new register
   */
  store() {

  }

  /**
   * @update Updated one register
   */
  update() {

  }

  /**
   * @delete Delete one register
   */
  delete() {

  }
}

/**
 * Singleton pattern: It guarantees the existence
 * of only one instance of a class, maintaining
 * a global point of access to its object.
 */
module.exports = new ContractController();
