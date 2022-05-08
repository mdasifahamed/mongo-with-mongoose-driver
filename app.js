const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");
const fruitsSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
})
const Fruit = mongoose.model("Fruit", fruitsSchema);
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Better"
});

const banana = new Fruit({
  name: "Banana",
  rating: 7,
  review: "Weired"
})

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Tangy And Tasty"
})
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Best"
})
//  Insert Bulk Items at On time
// Fruit.insertMany([banana, orange, kiwi], function(error){ for every time savings it will vreate the same data thats why after first  execution its in comment
//   if (error){
//     console.log(error);
//   }else{
//     console.log("Succesfully updated the fruit Database");
//   }
// })

// fruit.save(); for every time savings it will vreate the same data thats why after first  execution its in comment
const VeggisSchema = new mongoose.Schema({
  name : {
    type : String,
    required: [true, "Why no Name?"] // This validatin Makes the Required field rule
  },
  rating: {
    type: Number,
    min:1,
    max:10
  },
  review: String

});

const Veggi = mongoose.model("veggi", VeggisSchema);
const veggi = new Veggi({
  name: "Bitter guard",
  rating: 1, // as min value is set to 1 this will occur validation error in this field
  review : " Bitter to Taste! "
});
//veggi.save();

const data = new Veggi({
  name : "potol",
  rating : 3,
  review : "Better Than first One !"
})
// data.save();

const PersonsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouritefruit: fruitsSchema,
  favouriteVeggis : VeggisSchema
});

const Person = mongoose.model("Person", PersonsSchema);
const person = new Person({
  name: "John Doe",
  age: 37,
  favouritefruit: banana,
  favouriteVeggis: veggi
})
// person.save(); for every time savings it will vreate the same data thats why after first  execution its in comment

// Bulk insert


const asif = new Person({
  name: "Asif",
  age: 24,
  favouritefruit: orange,
  favouriteVeggis: veggi
})

const rahul = new Person({
  name: "Rahul",
  age: 27,
  favouritefruit: kiwi,
  favouriteVeggis: veggi
})

const rahim = new Person({
  name: "Rahim",
  age: 22,
  favouritefruit: kiwi,
  favouriteVeggis: veggi
})
//  Insert Bulk Items at On time
// Person.insertMany([asif, rahul, rahim], function(error){ // for every time savings it will vreate the same data thats why after first  execution its in comment
//   if(error){
//     console.log(error);
//   }else{
//     console.log("Successfully Updated The Person Database");
//   }
// })

// View the items inside node using below code
// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     fruits.forEach(function(fruit){
//     console.log(fruit.name);
//     });
//   }
// });
// View the items inside node using below code
// Person.find(function(err, people) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close() // to Shut down the server no error and ehat we to get after getting this close method should be called thats it this is good practise  .
//     people.forEach(function(person){
//     console.log(person.name);
//     });
//   }
// });

// Data Validation Using Mongoose



Person.updateOne({id:"6273be3e8c8b5aa03cdb5c70",},{favouritefruit: banana,favouriteVeggis:veggi}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("SuccessFully Updated");
  }
});
