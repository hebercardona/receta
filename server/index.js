const {createServer} = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
//const cors = require('cors');
const path = require('path');

const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));
//app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'))

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.get('/image', (req, res) => {
    res.sendFile(`${__dirname}/public/images/logo.jpg`)
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
