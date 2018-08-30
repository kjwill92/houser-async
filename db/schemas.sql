CREATE TABLE houser (
    id SERIAL PRIMARY KEY,
    property_name character varying(60),
    property_descrip text,
    address character varying(60),
    city character varying(60),
    my_state character varying(60),
    zip integer,
    img_url text,
    loan_amount money,
    monthly_mortgage money,
    desired_rent money,
    user_id integer REFERENCES sim2_users(id)
);

CREATE TABLE sim2_users (
    id SERIAL PRIMARY KEY,
    username character varying(40),
    password character varying(40)
);