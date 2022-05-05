const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://Curelink:Tyagi123@cluster0.wulgd.mongodb.net/Content?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));



  app.get('/add-blog',(req, res) => {
    const blog = new Blog({
      title: 'new blog',
      snippet: 'about the topic',
      body: 'more about the topic'
    });

    blog.save()
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get('/all-blogs', (req, res) => {
     Blog.find()
     .then((result) => {
        res.send(result);
     })

     .catch((err) => {
       console.log(err);
     });
  });

  app.get('/', (req, res)=> {
    Blog.findById()
    .then((result)=> {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    })
  })




module.exports = app;


