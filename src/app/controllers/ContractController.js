class ContractController {
  /**
   * @index List all registers
   */
  index(req, res) {
    res.send('Send from contact controller');
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
