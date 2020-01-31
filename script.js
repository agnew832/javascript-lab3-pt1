//contact class
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

//address book class properties
class AddressBook {
  constructor() {
    this.contacts = [];
  }

  //address book methods
  add(name, email, phone, relation) {
    this.contacts.push(new Contact(name, email, phone, relation));
  }

deleteAt(index) {
    this.contacts.splice(index, 1);
}
}
let myBook = new AddressBook();

myBook.add("betty agnew", "betty@gmail.com", "313.706.0482", "mother");
myBook.add("kristian agnew", "krissy@gmail.com", "248.555.5555", "daughter");
myBook.add("cortrelle agnew", "cortrelle@gmail.com", "313.555.5555", "brother"); 
myBook.deleteAt(1);//delete kristian 
console.log(myBook);

const print = function(AddressBookReference){
    AddressBookReference.contacts.forEach(contact=> {
        console.log(contact);
    });
};
print(myBook);

//Extended Challenge

//toString() method
// const o = new Object();
// myBook.toString("Tyler <tyler@email.com>"); // returns [object Object]

//getAt(index)
