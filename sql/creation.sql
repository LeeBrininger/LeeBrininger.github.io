create table plant(
	id int primary key NOT NULL auto_increment,
	plantname VARCHAR(100),
    price double,
    description text,
    image VARCHAR(1000),
    quantity int 
);
SELECT * FROM Plant;

RENAME TABLE users TO Users;
insert into plant VALUES (1, "Cactus 1", 10, "This is a cactus.", "assets/plantJPGs/cactus1.jpg", 5);
insert into plant VALUES (2, "Cactus 2", 20, "This may also be a cactus.", "assets/plantJPGs/cactus2.jpg", 1);
insert into plant VALUES (3, "Ball of Plant", 40, "This plant is in a ball.", "assets/plantJPGs/ball1.jpg", 40);
insert into plant VALUES (4, "Diseased", 70, "It took a lot of effort to desease a plant this fasionably", "assets/plantJPGs/disease.jpg", 3);
insert into plant VALUES (5, "Plant of Ball", 50, "This ball is in a plant.", "assets/plantJPGs/ball2.jpg", 30);
insert into plant VALUES (6, "Plant", 100, "We also sell plant.", "assets/plantJPGs/plant.jpg", 100);

insert into plant VALUES (7, "Tree", 77, "Buy Tree.", "assets/plantJPGs/plant.jpg", 100);

create table map_list(
	id int primary key NOT NULL auto_increment,
	mapname VARCHAR(100),
    price double,
    description text,
    image VARCHAR(1000)
);

insert into map_list VALUES (1, "Fin", 100, "This will lead you to Fin's treasure.", "assets/mapJPGs/example.jpg", 10);
insert into map_list VALUES (2, "Bear", 200, "This will lead you to a bear.", "assets/mapJPGs/example.jpg", 10);
insert into map_list VALUES (3, "Treasure", 400, "Maybe treasure here.", "assets/mapJPGs/example.jpg", 10);
insert into map_list VALUES (4, "Scam", 10000, "Back when I was a boy, I hid lots of gold around these parts. It has remained hidden ever since, collecting value in assorted ways. Now you can find it for the low low price offered here. This is a once in a lifetyme opportunity for you and every other visitor to this website, so buy quickly.", "assets/mapJPGs/example.jpg", 10);
insert into map_list VALUES (5, "Gold", 100, "Gold is worth money.", "assets/mapJPGs/example.jpg", 10);
insert into map_list VALUES (6, "Booze", 900, "There is a bar here with good booze.", "assets/mapJPGs/example.jpg", 10);


create table Users(
	id int primary key NOT NULL auto_increment,
	username VARCHAR(100),
    passhash varchar(200),
    userlevel varchar(20)
);

insert into user VALUES (1, 'creator', 12345, 'admin');
insert into user VALUES (2, 'Emily', 12345, 'admin');
insert into user VALUES (3, 'TreasureBoy', 12345, 'customer');
insert into user VALUES (4, 'PlantLover', 12345, 'customer');


CREATE TABLE customer(
   id INT NOT NULL AUTO_INCREMENT,
   firstname VARCHAR(20) NOT NULL,
   lastname VARCHAR(20) NOT NULL,
   PRIMARY KEY (id)
);