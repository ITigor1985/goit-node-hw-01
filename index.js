const contactsOperation = require('./contacts')

//contactsOperation.listContacts();
const invokeAction = async ({action, id, data}) => {
    switch(action){
        case"getAll":
        const contacts = await contactsOperation.listContacts();
        console.log(contacts); 
        break;
        case"removeContact":
        const filterContacts = await contactsOperation.removeContactById(id);  
        console.log(filterContacts); 
        break;        
        case"getContact":
        const getContact = await contactsOperation.getContactById(id); 
        console.log(getContact);
        break;
        default:console.log("Error")
    }
    
}
//invokeAction({action:"getAll"});
//invokeAction({action:"removeContact", id: "1"});
//invokeAction({action:"getContact", id: "1"});
 