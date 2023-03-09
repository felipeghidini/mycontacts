class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send Contact Response');
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
