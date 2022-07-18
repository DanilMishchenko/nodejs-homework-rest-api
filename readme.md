Routes description

//users

/_Logout request_/

GET api/users/logout

/_Current user request_/

GET api/users/current

/_Registration request_/

POST api/users/signup { "email": "example@example.com", "password": "examplepassword" }

/_Login request_/

POST api/users/login { "email": "example@example.com", "password": "examplepassword" }

/_Subscription renewal_/

PATCH api/users { "subscription": ["starter", "pro", "business"] }

/_User avatar update_/

PATCH api/users/avatars form-data: avatar

//contacts

/_List contacts_/

GET api/contacts

/_Get contact by id_/

GET api/contacts/:contactId

/_Add contact_/

POST api/contacts add { "name": "Allen Raymond", "email": "nulla.ante@vestibul.co.uk", "phone": "(992) 914-3792" }

/_Update contact_/

PUT api/contacts/:contactId update { "name": "Allen Raymond" }

/_Remove contact_/

DELETE api/contacts/:contactId

/_Update status contact_/

PATCH api/contacts/:contactId/favorite update status { "favorite": true/false }
