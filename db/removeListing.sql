delete from houser
where id = $1;

select * from houser
where user_id = $2