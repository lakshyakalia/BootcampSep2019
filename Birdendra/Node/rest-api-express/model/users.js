const schema = require("./modelSchema");

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
  };
  
  async function getUsers(req, res ) {
    try {
      const data = await schema.find();
      return data;
    } catch (err) {
      console.error(err);
    }
}
  
 async function createUser(req, res) {
     const body = (req.body);
     const schema1 = new schema(body);
    await schema1.save();
    return ({
      status: 200,
      statusText: "OK",
      message: "Client Inserted!"
    })
  
  }
  
async function updateUser(req, res) {
  try{
    const _id = req.query.id;
        await schema.findByIdAndUpdate(_id,req.body)
    return({
      status: 200,
      statusText: "OK",
      message: "Client Updated!"
    });
  }catch(err){
    console.log(err);
  }
}
  
async  function deleteUser(req, res) {
    try{
      const id = req.query.id;
      await schema.findByIdAndDelete(id);
    return ({
      status: 200,
      statusText: "OK",
      message: "Client Deleted!"
    });
    }catch(err){
      console.log(err);
  }
}