const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MovieOrders', {useNewUrlParser: true});
const port = 80;

app.use('/static', express.static('static'))
app.use(express.urlencoded())


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug');
})

app.get('/views/index.pug', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug');
})

app.get('/views/movies.pug', (req, res)=>{
    const params = {}
    res.status(200).render('movies.pug');
})

// app.get('/views/form', (req, res)=>{
//     const params = {}
//     res.status(200).render('form.pug');
// })

app.get('/views/contact.pug', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug');
})

app.get('/views/about.pug', (req, res)=>{
    const params = {}
    res.status(200).render('about.pug');
})

// Route to render the form page and pass the movie title
app.get('/form', (req, res) => {
    const movieTitle = req.query.movie || ''; // Get movie title from query parameter
    res.render('form', { movieTitle }); // Pass the movie title to the form.pug template
});

// Movie Tcket Booking Database
const formSchema = new mongoose.Schema({
    movie: String,
    name: String,
    Email: String,
    Contact: Number,
  });

  const Contact = mongoose.model('Bookings', formSchema);

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    var myData = new Contact(req.body);
        myData.save().then(()=>{
            res.status(200).send('<script>alert("Your Ticket is booked. Thank You!"); window.location.href = "/";</script>');
        }).catch(()=>{
            res.status(400).send('<script>alert("Form submission failed!"); window.location.href = "/";</script>');
});}
)


// Movie Contact Database
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
  });

  const Contacts = mongoose.model('Messages', contactSchema);

  app.post(`/contact-form`, (req, res)=>{
    var myData = new Contacts(req.body);
    myData.save().then(()=>{
        res.status(200).send('<script>alert("Your Message recieved. Our team will contact you soon. Thank You!"); window.location.href = "/";</script>');
    }).catch(()=>{
        res.status(400).send('<script>alert("Form submission failed!"); window.location.href = "/";</script>');
});}
  )


app.listen(port, ()=>{
    console.log(`The applcation started successfully on port ${port}`);
})
