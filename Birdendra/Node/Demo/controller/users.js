const fs = require("fs"),
path = require("path");

const { BaseController } = require("./BaseController");

class Users extends BaseController {
  constructor() {
    super();
    this.users = [];
  }

  async getUsers(req, res) {
    try {
      readFile()
        .then(data => {
          this.users = JSON.parse(data);

          const response = { total: this.users.length, data: this.users };

          res.setHeader("content-type", "application/json");
          res.end(JSON.stringify(response));
        })
        .catch(err => {
          const response = { error: err };

          res.setHeader("content-type", "application/json");
          res.end(JSON.stringify(response));
        });
    } catch (err) {
      console.error(err);
    }
        
  }

  async createUser(req, res) {
    try {
      let temp = []
      console.log("Hello : "+typeof(this.users))
      req.on("end", () => {
        readFile().then(data => {
          // this.users = JSON.parse(data);
          this.users.push(JSON.parse(data));
          // console.log("Hello : "+typeof(this.users))
          // console.log(this.users);
          const user = req.body;
          // console.log(user);
          this.users.push(user);
          // console.log(this.users)
          //console.log(temp);
          writeFile(this.users);

          const response = {
            status: 200,
            statusText: "OK",
            message: "Client Inserted!"
          };

          res.setHeader("content-type", "application/json");
          res.end(JSON.stringify(response));
        }).catch(e => {
          console.log(e);
        });
      });
    } catch (err) {
      console.error(err+"\nerror detected");
    }
    
  }

  async updateUser(req, res) {
    try {
      req.on("end", () => {
        let query = req.query;
        
        const id = Number.parseInt(query.age);

        const user = req.body;
        console.log("name "+user.name);
      //  this.users[id] = user;
      readFile().then(data => {
        // this.users = JSON.parse(data);
        
        this.users = JSON.parse(data);
        console.log(this.users[0].age);
        for ( let i = 0 ; i < this.users.length; i++ ){
        if ( this.users[i].age == id ){
          this.users[i].age = id ;
          this.users[i].name= user.name;
          this.users[i].country= user.country;
          writeFile(this.users);
          }
        }
        
        console.log("query" + query);
        const response = {
          status: 200,
          statusText: "OK",
          message: "Client Updated!"
        };

        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify(response));
      }).catch();
    }); 
  }
  catch (err) {
    console.error(err);
  }
}

  async deleteUser(req, res) {
    try {
    } catch (err) {
      console.error(err);
    }
  }
}
function readFile() {
  const dbPath = path.join(__dirname, "../db", "users.json");
  return fs.promises.readFile(dbPath, "utf-8");
}

function writeFile(data) {
  const dbPath = path.join(__dirname, "../db", "users.json");
  return fs.promises.writeFile(dbPath, JSON.stringify(data));
}
exports.Users = Users;

