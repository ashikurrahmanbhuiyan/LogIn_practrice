const express = require('express');

const app = express();

app.use(express.static('views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('login');
});
app.get('/', (req, res) => {
    res.render('log_in');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
