CREATE TABLE "pets" (
    "id" serial primary key,
    "name" varchar(80) not null,
	"type" varchar(80) not null,
    "breed" varchar(80) not null,
    "color" varchar(80) not null,
    "owner" varchar(80) not null,
    "checkedIn" boolean
);

INSERT INTO "pets" ("name", "type", "breed", "color", "owner", "checkedIn")
VALUES ('August', 'dog', 'Aussie','black', 'Giovanna', true), 
('Willow', 'dog', 'Aussie','grey', 'Hannah', true),
('Princeton', 'cat', 'Tuxedo','black','Melody', true);