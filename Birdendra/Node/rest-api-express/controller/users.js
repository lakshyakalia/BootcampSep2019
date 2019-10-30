const { user } = require("../model");

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};

async function getUsers(req, res) {
  try{
    // const response = await 
    const response = await user.getUsers();
    //console.log(response);
    res.send(response);
  }catch(err){
    console.log(err);
  }
}

async function createUser(req, res) {
  try{
  const response = await user.createUser(req , res );
  res.send(response);
  }catch(err){
    console.log(err);
  }
}

async function updateUser(req, res) {
 
 try{
  const response =  user.updateUser(req ,res);
  res.send(response);
 }catch(err){
   console.log(err);
 }
}

async function deleteUser(req, res) {
  try{

    const response = await user.deleteUser(req, res );
    res.send(response);
  }
  catch(err){
    console.log(err);
  }
}