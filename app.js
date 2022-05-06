const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/Blogmodel');
const User = require('./models/Usermodel');
const schedule = require('node-schedule');
require('./Mail/transporter')

const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://Curelink:Tyagi123@cluster0.wulgd.mongodb.net/Content?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));

//database for content

  app.post('/add-blog',(req, res) => {
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

  app.post('/all-blogs', (req, res) => {
     Blog.find()
     .then((result) => {
        res.send(result);
     })

     .catch((err) => {
       console.log(err);
     });
  });

  /*app.get('/', (req, res)=> {
    Blog.findById()
    .then((result)=> {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    })
  })*/
// database for user
  app.post('/add-User',(req, res) => {
    const user = new User({
      email: 'abc@example.com',
      Fullname: 'Name',
      Topic: 'Interested topic'
    });

   user.save()
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // schedule mail before 15 min from sending
  schedule.schedule('0 */15 * * * *', () => {
    transporter.sendMail(mailOptions, function (err, info) {
        if(err) 
          console.log(err);
        else
          console.log(info);
         });
    });

  const PORT = 3001;

app.listen(PORT, () => console.log(`App is running on ${PORT}...`));

module.exports = app;


