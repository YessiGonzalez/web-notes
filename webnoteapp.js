const express = require('express')
const app = express()
app.use('/css', express.static('css'));
const port = 3000

const myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'I like pineapples'
];



// app.get('/', (req, res) => res.send('Web Notes'))
// app.use('/', express.static('views'));
app.get('/', (req, res) => {
    res.render('notes.ejs', { notes: myNotes });
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/notes', (req, res) => {
    myNotes.push(req.body.note);
    res.redirect('/');
});
app.listen(port, () => console.log(`'Web Notes app listening on port ${port}!`))