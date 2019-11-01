const { baseURI } = require("../config").config;
const { Users } = require("../controller");

const routes = {
  users: `${baseURI}/users`
};

module.exports = (req, res) => {
  const url = req.url.includes("?")
    ? req.url.substr(0, req.url.lastIndexOf("?"))
    : req.url;

  switch (url) {
    case routes.users:
      users(req, res, req.method);
      break;
  }
};

function users(req, res, reqMethod) {
  const users = new Users();

  switch (reqMethod) {
    case "GET":
      console.log('get called');
      users.getUsers(req, res);
      break;
    case "POST":
        console.log("post called");
      users.createUser(req, res);
      break;
    case "PATCH":
        console.log('put called')
      users.updateUser(req, res);
      break;
    case "DELETE":
      users.deleteUser(req, res);
      break;
  }
}