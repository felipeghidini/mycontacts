const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  show() {
    // Obter um registro
  }

  store() {
    // criar um novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Excluir um registro
  }
}

module.exports = new ContactController();
