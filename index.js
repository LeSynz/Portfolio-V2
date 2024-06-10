const express = require("express");

const app = express();
const port = 3000;

app.use(express.json()); // Add JSON parsing middleware

app.set('view engine', 'ejs');
app.set('views', './views'); // Use relative path for views
app.use(express.static('public')); // Use relative path for static files

app.get('/', (req, res) => {
    res.render('index');
});

app.use((err, req, res, next) => { // Add error-handling middleware
    console.error(err);
    res.status(500).send('Error occurred');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});