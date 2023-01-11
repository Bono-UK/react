const Pool = require("pg").Pool

const pool = new Pool({
  user:"dmosk",
  password:"background",
  host:"localhost",
  port:"5432",
  database:"node"
})

module.exports = pool
