const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");
// const fruitsSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// })
// const Fruit = mongoose.model("Fruit", fruitsSchema);
// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Better"
// });
//
//
// // fruit.save(); for every time savings it will vreate the same data thats why after first  execution its in comment
//
// const PersonsSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });
//
// const Person = mongoose.model("Person", PersonsSchema);
// const person = new Person({
//   name: "John Doe",
//   age: 37
// })
// // person.save(); for every time savings it will vreate the same data thats why after first  execution its in comment
//
// // Bulk insert
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 7,
//   review: "Weired"
// })
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "Tangy And Tasty"
// })
// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "Best"
// })
//
// // Fruit.insertMany([banana, orange, kiwi], function(error){ for every time savings it will vreate the same data thats why after first  execution its in comment
// //   if (error){
// //     console.log(error);
// //   }else{
// //     console.log("Succesfully updated the fruit Database");
// //   }
// // })
// const asif = new Person({
//   name: "Asif",
//   age: 24
// })
//
// const rahul = new Person({
//   name: "Rahul",
//   age: 27
// })
//
// const rahim = new Person({
//   name: "Rahim",
//   age: 22
// })
// // Person.insertMany([asif, rahul, rahim], function(error){ // for every time savings it will vreate the same data thats why after first  execution its in comment
// //   if(error){
// //     console.log(error);
// //   }else{
// //     console.log("Successfully Updated The Person Database");
// //   }
// // })
//
// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     fruits.forEach(function(fruit){
//     console.log(fruit.name);
//     });
//   }
// });
//
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

const VeggisSchema = new mongoose.Schema({
  name : {
    type : String,
    required: [true, "Why no Name?"]
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
  rating : 3,
  review : "Better Than first One !"
})
data.save();
