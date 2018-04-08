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
VALUES ('August', 'dog', 'Aussie','black', 1, true), 
('Willow', 'dog', 'Aussie','grey', 2, true),
('Princeton', 'cat', 'Tuxedo','black', 3, true);

--owners table 
CREATE TABLE "owners" (
	"id" serial primary key,
    "firstname" varchar(80) not null
);

--starting owners 
INSERT INTO "owners" ("firstname")
VALUES ('Giovanna'),
('Hannah'),
('Melody');

--GET all pet's information including owner name
SELECT "pets"."name", "pets"."type", "pets"."breed", "pets"."color", "owners"."firstname", "pets"."checkedIn" FROM "pets" JOIN "owners" ON "pets"."owners_id" = "owners"."id";

--GET number of pets each owner has checked into hotel
SELECT "owners".*, count("pets") as "numOfPets" 
                FROM "owners" LEFT JOIN "pets"
                ON "owners"."id" = "pets"."owners_id"
                GROUP BY "owners"."id";