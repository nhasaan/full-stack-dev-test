create table Users
(
  id integer,
  name varchar(100),
  occupation varchar(100)
);
insert into Users
  (id, name, occupation)
values
  ('1', 'Rifat', 'Doctor'),
  ('2', 'Samantha', 'Engineer'),
  ('3', 'Soumya', 'Doctor'),
  ('4', 'Cristina', 'Economist');

-- Print the names with first letter
select name, left(name, 1)
from Users;

-- Print {occupation_count}, occupation SQL
select
  count(occupation),
  occupation
from Users
group by
  occupation;