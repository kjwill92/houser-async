insert into houser
(property_name, property_descrip, address, city, my_state, zip, img_url, loan_amount, monthly_mortgage, desired_rent, user_id)
values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
returning *;