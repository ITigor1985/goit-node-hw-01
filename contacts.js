const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, 'db/contacts.json')

async function listContacts(){
    const data =await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts
}

const getContactById = async (id) =>{
    const contacts =await listContacts();    
    const result = contacts.find(contact => contact.id === id);    
    return result;
    
}
async function removeContactById(id){
    const data =await fs.readFile(contactsPath);
    const contacts = JSON.parse(data); 
    const filterContacts = contacts.filter(contact => contact.id !== id);    
    return filterContacts;
}

module.exports ={
    listContacts,
    getContactById,
    removeContactById
}