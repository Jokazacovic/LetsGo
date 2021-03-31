CREATE TABLE user(
    _id SERIAL PRIMARY KEY, 5
    user_name VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
);

CREATE TABLE itinerary(
    _id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    radius integer,
    location VARCHAR NOT NULL,
    budget VARCHAR,
    breakfast VARCHAR,
    lunch VARCHAR,
    dinner VARCHAR,
    hotel VARCHAR,
    active VARCHAR,
    arts VARCHAR,
    nightlife VARCHAR,
    shopping VARCHAR,
    user_id integer NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(_id)
);
