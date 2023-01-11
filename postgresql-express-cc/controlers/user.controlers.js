const db = require("../db")

class UserController {
  async createUser(req, res) {
    const {name, sername} = req.body
const newPersons = await db.query(`INSERT INTO person(name, sername) values($1, $2) RETURNING *`[name,sername])
    res.json("newPersons")
  }
  async getUser(req, newPersons) {
  }
  async getOneUser(req, res) {
    
  }
  async updateUser(req, res) {
    
  }
  async deleteUser(req, res) {
    
  }
}

module.exports = new UserController()
