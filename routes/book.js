const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const books = require("../Tales.json");
const Book = require("../models/Book");
// app.use(express.json())

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
// const MongoClient = require('mongodb').MongoClient;
// const url = process.env.MONGODB_URI;
// const dbName = 'theatre-without-forest';
// let db;
 
// MongoClient.connect(url, function(err, client) {
//   console.log("Connected successfully to server");
//   db = client.db(dbName);
// });

router.post("/books/add", async(req,res) =>{
    try{
        const {ageCategory,title,author,description, duration, video, timeCode} = req.fields;
        const newBook = new Book ({
        ageCategory: ageCategory,
        title: title,
        author: author,
        image: req.files.image,
        description : description,
        duration: duration,
        video :req.files.video,
        // timeCode :[
        //     {
        //         entry: String,
        //         loop:String,
        //         exit:String,
        //     },
        //     {
        //       entry:String,
        //       loop:String,
        //       exit:String,
        //   },
        //   {
        //       entry:String,
        //       loop:String,
        //       exit:String,
        //   },
        //   {
        //       entry:String,
        //       loop:String,
        //       exit:String,
        //   },
        //   {
        //       entry:String,
        //       loop:String,
        //       exit:String,
        //   },
        //   {
        //       entry:String,
        //       loop:String,
        //       exit:String,
        //   },
        //   {
        //       entry:String,
        //       loop:String,
        //       exit:String,
        //     },
        //     {
        //         entry:String,
        //         loop:String,
        //         exit:String,
        //     },
        //     {
        //         entry:String,
        //         loop:String,
        //         exit:String,
        //     },
        //     {
        //         entry:String,
        //         loop:String,
        //         exit:String,
        //     },
        // ]

        });
        console.log(newBook);
        await newBook.save();
        return res.status(200).json(newBook);
    }catch(error){
        res.status(400).json(error.message);
    }
});

router.get("/books", async (req,res)=>{

    try{
        // if (req.query.title){
        //     console.log(req.query.title)
        //     filters.title = new RegExp(req.query.title, "i");
        // }
        const tale = await Book.find();
        return res.status(200).json(tale);
    }catch(error){

    }
})

router.get("/books/:id", async (req,res)=>{
    try{
        const book = await Book.findById(req.params.id)
        return res.json(book);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;