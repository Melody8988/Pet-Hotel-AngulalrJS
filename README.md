# Angular Capstone

This is a full stack application intended for a small pet sitting buisness to be able to manage their customer information and all the current pets in their care. 

Live version on Heroku: https://gentle-reef-36138.herokuapp.com/#!/dash

## Built With SEAN stack

* PostgreSQL
* AngularJS
* Express 
* Node.js

## Getting Started

```
npm install
```
```
npm start
```

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [SweetAlert](https://sweetalert.js.org/guides/)

### Installing

Steps to get the development environment running.

```sql
--pets table
CREATE TABLE "pets" (
  "id" serial primary key,
  "name" varchar(80) not null,
  "type" varchar(80) not null,
  "breed" varchar(80) not null,
  "color" varchar(80) not null,
  owners_id INT REFERENCES "owners",
  "checkedIn" boolean DEFAULT false
);

--starting pets
INSERT INTO "pets" ("name", "type", "breed", "color", owners_id, "checkedIn")
VALUES ('August', 'dog', 'Aussie','black', 1, true);

--owners table 
CREATE TABLE "owners" (
	"id" serial primary key,
  "firstname" varchar(80) not null
	"lastname" varchar(80) not null
	"phone" varchar(80) not null
	"email" varchar(80) not null
);

--starting owners 
INSERT INTO "owners" ("firstname", "lastname", "phone", "email")
VALUES ('Ann', 'Perkins', '1234567890', 'annperkins@gmail.com');
```

### Completed Features

High level list of items completed.

- [X] Ability to add new owners and pets
- [X] Ability to remove owners if no pets are assigned
- [X] Ability to remove pets
- [X] Ability to update the check in status of a pet
- [X] Display the total number of pets next to each owner

### Next Steps

Features to add in the future:

- [ ] More Angular Material for design
- [ ] Keep track of visits (may need to add another table or two for this)
- [ ] Add images for pets
- [ ] Update pets and owners


