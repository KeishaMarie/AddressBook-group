// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, email, homeAddress, workAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.homeAddress = homeAddress;
  this.workAddress = workAddress;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// User Interface Logic ---------
let addressBook = new AddressBook();

function listContacts(addressBookToDisplay) {
  console.log("listContacts ran")
  let contactsDiv = document.querySelector("div#contacts");
  contactsDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    const li = document.createElement("li");
    li.append(contact.fullName());
    li.setAttribute("id", contact.id);
    ul.append(li);
  });
  contactsDiv.append(ul);
  console.log("ul to be added" + ul)
}

function displayContactDetails(event) {
  console.log("ran displayContactDetails");
  const contact = addressBook.findContact(event.target.id);
  document.querySelector(".first-name").innerText = contact.firstName;
  document.querySelector(".last-name").innerText = contact.lastName;
  document.querySelector(".phone-number").innerText = contact.phoneNumber;
  document.querySelector(".email").innerText = contact.email;
  document.querySelector(".homeAddress").innerText = contact.homeAddress;
  document.querySelector(".workAddress").innerText = contact.workAddress;
  document.querySelector("button.delete").setAttribute("id", contact.id);
  document.querySelector("div#contact-details").removeAttribute("class");
  optionalCheck(contact)
}

function optionalCheck(arguement) {
  document.querySelector("div#email").setAttribute("class", "hidden")
  document.querySelector("div#homeAddress").setAttribute("class", "hidden")
  document.querySelector("div#workAddress").setAttribute("class", "hidden")
  const email = arguement.email;
  if (email !== "") {
    console.log(email, typeof(email));
    document.querySelector("div#email").removeAttribute("class");
  }
  const homeAddress = arguement.homeAddress;
  if (homeAddress !== "") {
    console.log(homeAddress, typeof(homeAddress));
    document.querySelector("div#homeAddress").removeAttribute("class");
  }
  const workAddress = arguement.workAddress;
  if (workAddress !== "") {
    console.log(workAddress, typeof(workAddress));
    document.querySelector("div#workAddress").removeAttribute("class");
  }
}

function handleDelete(event) {
  console.log("ran handleDelete");
  addressBook.deleteContact(event.target.id);
  document.querySelector("button.delete").removeAttribute("id");
  document.querySelector("div#contact-details").setAttribute("class", "hidden");
  listContacts(addressBook);
}

function handleFormSubmission(event) {
  event.preventDefault();
  console.log("handle form submission ran")
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
  const inputtedEmail = document.querySelector("input#new-email").value;
  const inputtedHomeAddress = document.querySelector("input#new-home-address").value;
  const inputtedWorkAddress = document.querySelector("input#new-work-address").value;
  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedHomeAddress, inputtedWorkAddress);
  console.log("address book you just added: " + newContact)
  addressBook.addContact(newContact);
  listContacts(addressBook);
  document.querySelector("input#new-first-name").value = null;
  document.querySelector("input#new-last-name").value = null;
  document.querySelector("input#new-phone-number").value = null;
  document.querySelector("input#new-email").value = null;
  document.querySelector("input#new-home-address").value = null;
  document.querySelector("input#new-work-address").value = null;
}

window.addEventListener("load", function (){
  console.log("add event listener, load");
  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#contacts").addEventListener("click", displayContactDetails);
  document.querySelector("button.delete").addEventListener("click", handleDelete);
});