# Address Book

#### By Joseph Jackson & Keisha Hepner & Najma Abdi

#### A Website for organizing contacts

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap

## Description

This website lets users create contacts with optional slots for email, work, and home adresses. Users have the functionality to view and delete created contacts.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

## Known bugs

* None

## TDD

Description:

Test: "It should allow a user to input an email address"
Code:
test = input#new-email
Expected Output:
email


Test: "It shouldn't display an email if there isn't one submitted"
Code:
input#new-email = null
Expected output: null


Test: "It should allow users to input work, home, and email addresses"

code:
test = input#new-email, input#new-home-address, input#new-work-address

expected output:
email, home address, work address

## License

MIT

Copyright (c) Joseph Jackson & Najma Abdi & Keisha Hepner