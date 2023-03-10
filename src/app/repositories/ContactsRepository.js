const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Felipe',
    email: 'felipe@mail.com',
    phone: '11223322',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
