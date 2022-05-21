const mongoose = require("mongoose");

const Book = mongoose.model("Book", {
//   title: String,
//   tome: String,
//   cover: { type: mongoose.Schema.Types.Mixed, default: {} },
  ageCategory: String,
  title: String,
  author: String,
  image: String,
  description : String,
  duration: String,
  video : String,
  timeCode :[
      {
          entry:String,
          loop:String,
          exit:String,
      },
      {
        entry:String,
        loop:String,
        exit:String,
    },
    {
        entry:String,
        loop:String,
        exit:String,
    },
    {
        entry:String,
        loop:String,
        exit:String,
    },
    {
        entry:String,
        loop:String,
        exit:String,
    },
    {
        entry:String,
        loop:String,
        exit:String,
    },
    {
        entry:String,
        loop:String,
        exit:String,
    },
    {
        entry:String,
        loop:String,
        exit:String,
    },
    {
        entry:String,
        loop:String,
        exit:String,
    },
    {
        entry:String,
        loop:String,
        exit:String,
    },
  ]
});

module.exports = Book;