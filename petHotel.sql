CREATE TABLE "pets" (
    "id" serial primary key,
    "name" varchar(80) not null,
	"type" varchar(80) not null,
    "breed" varchar(80) not null,
    "color" varchar(80) not null,
    owners_id INT REFERENCES "owners",
    "checkedIn" boolean DEFAULT false
);

INSERT INTO "pets" ("name", "type", "breed", "color", owners_id, "checkedIn")
VALUES ('August', 'dog', 'Aussie','black', 1, true), 
('Willow', 'dog', 'Aussie','grey', 2, true),
('Princeton', 'cat', 'Tuxedo','black', 3, true);

CREATE TABLE "owners" (
	"id" serial primary key,
    "name" varchar(80) not null
);

INSERT INTO "owners" ("name")
VALUES ('Giovanna'),
('Hannah'),
('Melody');

INSERT INTO "owners" ("name")
 VALUES ('New Owner');