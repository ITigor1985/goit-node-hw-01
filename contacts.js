const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(error.massage);
  }
}

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === id);
  return result ? result : null;
};
async function removeContactById(id) {
  const contacts = await listContacts();
  const contactsFindId = await getContactById(id);
  if (!contactsFindId) {
    return null;
  }
  const filterContacts = contacts.filter(
    (contact) => contact.id !== contactsFindId.id
  );
  await fs.writeFile(contactsPath, JSON.stringify(filterContacts, null, 2));
  return contactsFindId;
}

async function add(data) {
  try {
    const contacts = await listContacts();
    const newContact = { ...data, id: v4() };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
  } catch (error) {
    console.error(error.massage);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContactById,
  add,
};
