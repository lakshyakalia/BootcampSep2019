const { user } = require("../models");

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};

async function getUsers(req, res) {
  const response = await user.getUsers();
  res.send(response);
}

function createUser(req, res) {
  const body = req.body;
  users.push(body);

  res.send({
    status: 200,
    statusText: "OK",
    message: "Client Inserted!"
  });
}

function updateUser(req, res) {
  const body = req.body;
  const id = req.query.id;

  console.log(id);

  for (let key in body) {
    users[id][key] = body[key];
  }

  res.send({
    status: 200,
    statusText: "OK",
    message: "Client Updated!"
  });
}

function deleteUser(req, res) {
  const id = req.query.id;

  users.pop(id);

  res.send({
    status: 200,
    statusText: "OK",
    message: "Client Deleted!"
  });
}