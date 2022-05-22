const contactsOperation = require("./contacts");
const { program } = require("commander");

//contactsOperation.listContacts();
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperation.listContacts();
      console.table(contacts);
      break;
    case "remove":
      const filterContacts = await contactsOperation.removeContactById(id);
      if (!filterContacts) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(filterContacts);
      break;
    case "get":
      const getContact = await contactsOperation.getContactById(id);
      if (!getContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(getContact);
      break;
    case "add":
      const addContact = await contactsOperation.add({ name, email, phone });
      console.table(addContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);
