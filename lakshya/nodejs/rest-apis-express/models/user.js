const user = require('../model/schema')
module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser

};

const users = [];

async function getUsers() {

    // return new Promise((resolve, reject) => {
    //   resolve({
    //     status: 200,
    //     statusText: "OK",
    //     data: users
    //   });
    // });

    return await user.find();
}

async function createUser(req, res) {
    // const body = req.body;
    // users.push(body);

    // res.send({
    //   status: 200,
    //   statusText: "OK",
    //   message: "Client Inserted!"
    // });
    let response, body, details
    body = req.body

    details = new user(body)
    console.log(details)
    try {
        response = await details.save()
        return response
    } catch (err) {
        response = { error: err }
        return response
    }
}

async function updateUser(req, res) {
    // const body = req.body;
    // const id = req.query.id;

    // console.log(id);

    // for (let key in body) {
    //   users[id][key] = body[key];
    // }

    // res.send({
    //   status: 200,
    //   statusText: "OK",
    //   message: "Client Updated!"
    // });
    _id = req.query.id
    const response = await user.findByIdAndUpdate(_id, req.body, { new: true })
    return response

}

async function deleteUser(req, res) {
    // const id = req.query.id;

    // users.pop(id);

    // res.send({
    //   status: 200,
    //   statusText: "OK",
    //   message: "Client Deleted!"
    // });

    const _id = req.query.id
    const response = await user.findByIdAndRemove(_id)
    res.send(response)
}