create database test_creation_api;
use test_creation_api;

create table entity(
    idEntity int primary key auto_increment,
    name VARCHAR(255)
);

create table user(
    idUser int primary key auto_increment,
    userName VARCHAR(255),
    email VARCHAR(255) unique,
    pwd varchar(255)
);

create table userEntity(
    idUserEntity int primary key auto_increment,
    idEntity int references entity(idEntity),
    idUser int references user(idUser),
    foreign key (idEntity) references entity(idEntity),
    foreign key (idUser) references user(idUser)
);

create or replace view v_userEntite as 
select 
    ue.idUserEntity,
    u.idUser,
    u.userName,
    u.email,
    e.idEntity,
    e.name as entityName
from userEntity ue
inner join user u on ue.idUser = u.idUser
inner join entity e on ue.idEntity = e.idEntity;



insert into entity (name) values 
("Entite 1"),
("Entite 2"),
("Entite 3");

insert into user (userName,email,pwd) values 
("user1","user1@gmail.com","mdpUser1"),
("user2","user2@gmail.com","mdpUser2"),
("user3","user3@gmail.com","mdpUser3");

insert into userEntity (idEntity,idUser) values 
(1,1),
(1,2),
(1,3),
(2,1),
(2,3),
(3,1);

