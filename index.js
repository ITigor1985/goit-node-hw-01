const contactsOperation = require('./contacts')

//contactsOperation.listContacts();
const invokeAction =async ({action, id, data}) => {
    switch(action){
        case"getAll":
        const data = await contactsOperation.listContacts(); 
        console.log(data);
        return data;
        break;
    }
    
}
invokeAction({action:"getAll"});
 