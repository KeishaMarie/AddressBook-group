TDD

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
