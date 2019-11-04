var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDb', {
  useNewUrlParser: true,
  useCreateIndex: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose connected");
});

module.exports={ 
  mongoose
}
// const User = mongoose.model('User',{
//   name:{
//     type:String
//   },
//   age:{
//     type : Number
//   }
// })

// const me = new User({
//   name:"Ganga Singh",
//   age:22
// })
// me.save().then((me)=>{
//   console.log(me);
// }).catch((err)=>{
//   console.log(err);
// })