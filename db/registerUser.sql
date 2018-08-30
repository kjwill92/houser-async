insert into sim2_users
(username, password)
values ($1, $2) 
returning *;