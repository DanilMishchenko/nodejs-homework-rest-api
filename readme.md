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

//contacts

GET api/contacts

GET api/contacts/:contactId

POST api/contacts add { "name": "Allen Raymond", "email": "nulla.ante@vestibul.co.uk", "phone": "(992) 914-3792" }

PUT api/contacts/:contactId update { "name": "Allen Raymond" }

DELETE api/contacts/:contactId

PATCH api/contacts/:contactId/favorite update status { "favorite": true/false }
