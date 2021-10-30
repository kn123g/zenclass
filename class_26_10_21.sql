CREATE DATABASE zenclass;
USE zenclass;

CREATE TABLE mentors(mentor_id int primary key,mentor_name varchar(150));
INSERT INTO mentors VALUES (1,'Dhoni');
INSERT INTO mentors VALUES (2,'Sachin');
INSERT INTO mentors VALUES (3,'Dravid');
INSERT INTO mentors VALUES (4,'Ganguly');
INSERT INTO mentors VALUES (5,'Yuvi');


CREATE TABLE students_db (student_id int primary key auto_increment,student_name varchar(45), student_email varchar(40));
-- add new column
ALTER TABLE students_db ADD gender varchar(10);
-- add new column
ALTER TABLE students_db ADD address varchar(100);
-- rename table
ALTER TABLE students_db RENAME users;
-- modify column
ALTER TABLE users MODIFY COLUMN student_email varchar(100);
-- drop column
ALTER TABLE users DROP COLUMN address;
-- rename column
ALTER TABLE users RENAME COLUMN gender TO student_gender;

-- add column
ALTER TABLE users ADD COLUMN mentor int	;
ALTER TABLE users ADD CONSTRAINT  foreign key (mentor) references mentors(mentor_id);


INSERT INTO users (student_id,student_name, student_email,student_gender) VALUES (1,'Mohammed', 'Mohammed@mail.com','male');
INSERT INTO users (student_name, student_email) VALUES ('Abhinav', 'Abhinav@mail.com');

INSERT INTO users (student_name, student_email,student_gender) VALUES 
('Akanksha', 'Akanksha@mail.com','male'), ('Arya', 'Arya@mail.com','female');

INSERT INTO users VALUES (10,'Mohammesdd', 'Mohammasded@mail.com','female',4);
UPDATE users SET mentor=1 where student_id=1;
UPDATE users SET mentor=3 where student_id=2;
UPDATE users SET mentor=5 where student_id=3;
UPDATE users SET mentor=2 where student_id=4;

INSERT INTO users(student_name, student_email,student_gender) 
VALUES ('karthi', 'karthi@mail.com','male');

SELECT * FROM users;

-- SQL_SAFE_UPDATES through error when didn't specify where condition in update and delete query
SET SQL_SAFE_UPDATES=0;
UPDATE users SET student_email='Abhinav-chubb@mail.com' WHERE student_name='Abhinav';


CREATE TABLE attendance(student_id int,session_date date,
foreign key (student_id) references users(student_id));

INSERT INTO attendance VALUES (2,sysdate());
INSERT INTO attendance VALUES (1,sysdate());
INSERT INTO attendance VALUES (3,'2020-9-28');
INSERT INTO attendance VALUES (1,'2019-8-29');
INSERT INTO attendance VALUES (2,'2020-9-29');
INSERT INTO attendance VALUES (4,'2021-6-29');


CREATE TABLE topic(topic_id int primary key,topic_name varchar(50));
INSERT INTO topic VALUES (1,'sql');
INSERT INTO topic VALUES (2,'html');
INSERT INTO topic VALUES (3,'css');
INSERT INTO topic VALUES (4,'react');
INSERT INTO topic VALUES (5,'node');
INSERT INTO topic VALUES (6,'mongodb');

CREATE TABLE tasks(task_id int primary key,task_name varchar(200));
INSERT INTO tasks VALUES (1,'crud operation using react');
INSERT INTO tasks VALUES (2,'design hotel website');
INSERT INTO tasks VALUES (3,'mysql DDL & DML');
INSERT INTO tasks VALUES (4,'mysql DQL');
INSERT INTO tasks VALUES (5,'javascript map,filter,reduce');

CREATE TABLE company_drives(drive_id int primary key auto_increment,company_name varchar(200),drive_date date);
INSERT INTO company_drives(company_name,drive_date) VALUES ('freshworks','2021-6-29');
INSERT INTO company_drives(company_name,drive_date) VALUES ('ZOHO','2021-9-09');
INSERT INTO company_drives(company_name,drive_date) VALUES ('amazon','2020-6-04');
INSERT INTO company_drives(company_name,drive_date) VALUES ('paypal','2021-5-06');
INSERT INTO company_drives(company_name,drive_date) VALUES ('TCS','2021-7-12');

CREATE TABLE courses(course_id int primary key,course_name varchar(100));
INSERT INTO courses VALUES (1,'Full stack MERN developement');
INSERT INTO courses VALUES (2,'java');
INSERT INTO courses VALUES (3,'javascript');
INSERT INTO courses VALUES (4,'Data Scientist');
INSERT INTO courses VALUES (5,'Backend development using node');

CREATE TABLE students_activated_courses(
course_id int,
student_id int,
foreign key (course_id) references courses (course_id),
foreign key (student_id) references users(student_id));

INSERT INTO students_activated_courses VALUES (1,1);
INSERT INTO students_activated_courses VALUES (2,1);
INSERT INTO students_activated_courses VALUES (2,2);
INSERT INTO students_activated_courses VALUES (2,4);
INSERT INTO students_activated_courses VALUES (3,3);
INSERT INTO students_activated_courses VALUES (3,2);
INSERT INTO students_activated_courses VALUES (5,1);
INSERT INTO students_activated_courses VALUES (5,4);

CREATE TABLE codekata(program_id int primary key auto_increment,program_name varchar(50));
INSERT INTO codekata(program_name) values ('number problem'),('array problem'),
('string problem'),('Mathematics'),('Looping');

CREATE TABLE codekata_users_status(student_id int,
program_solved int,
foreign key (student_id) references users(student_id),
foreign key (program_solved) references codekata(program_id));
INSERT INTO codekata_users_status values (1,1);
INSERT INTO codekata_users_status values (1,5);
INSERT INTO codekata_users_status values (2,1);
INSERT INTO codekata_users_status values (2,2);
INSERT INTO codekata_users_status values (2,4);
INSERT INTO codekata_users_status values (3,3);
INSERT INTO codekata_users_status values (3,2);
INSERT INTO codekata_users_status values (4,5);


CREATE TABLE student_drives(student_id int,
drive_id int,
foreign key (student_id) references users(student_id),
foreign key (drive_id) references company_drives(drive_id));

INSERT INTO student_drives values (1,1);
INSERT INTO student_drives values (1,5);
INSERT INTO student_drives values (2,1);
INSERT INTO student_drives values (2,2);
INSERT INTO student_drives values (2,4);
INSERT INTO student_drives values (3,3);
INSERT INTO student_drives values (3,2);
INSERT INTO student_drives values (4,5);


select u.student_name,u.student_email,u.student_gender from codekata_users_status us inner join codekata c on us.program_solved = c.program_id 
inner join users u on u.student_id = us.student_id 
where c.program_name = 'number problem';

select u.student_name,u.student_email,cd.company_name,cd.drive_date from users u inner join student_drives sd on u.student_id = sd.student_id
inner join company_drives cd on sd.drive_id =cd.drive_id;

select u.student_name,u.student_email,c.course_name from students_activated_courses sac 
inner join courses c on  sac.course_id = c.course_id
inner join users u on sac.student_id = u.student_id  group by u.student_name,u.student_email,c.course_name
order by u.student_name;

select * from mentors;


select count(*) from users u inner join mentors m on m.mentor_id=u.mentor;

-- list of user not assigned mentor
select u.student_id,u.student_name,m.mentor_name  from users u left join mentors m on m.mentor_id=u.mentor where u.mentor is  null;


-- delete query
-- DELETE FROM users;
-- DROP DATABASE guvi;
