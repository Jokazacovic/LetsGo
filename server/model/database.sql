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

INSERT INTO itinerary(date, radius, location, budget, breakfast, lunch, dinner, hotel, active, arts, nightlife, shopping, user_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *;


{
    "location" : "Portland",
    "date" : "May 30, 2020",
    "radius" : 200,
    "budget" : "$",
    "Breakfast": false,
    "Lunch": false,
    "Dinner" : false,
    "Hotels": false,
    "Nightlife": true,
    "Shopping": false,
    "Active Life" : false,
    "Arts & Entertainment" : false,
    "user_id" : 3
}