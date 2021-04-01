const { Pool } = require("pg");

const PG_URI =
  "postgres://rnovejui:XPeBOFQpnlopBQihSsvP87UvgLmEJblK@kashin.db.elephantsql.com:5432/rnovejui";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
