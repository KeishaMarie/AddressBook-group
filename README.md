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

## No known Bugs


## MIT License

Copyright (c) [2022] [Keisha Hepner, Najma Abdi & Joseph Jackson]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

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
