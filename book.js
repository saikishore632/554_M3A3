// Name: Shruthi Shashidhar
// ID: 1226505841
// Date: 09/20/2023

const express = require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

// Global middleware to log request details
app.use((req, res, next) => {
    const { method, url } = req;
    const dateTime = new Date().toLocaleString();
    console.log(`[${dateTime}] ${method} ${url}`);
    next();
  });
// to check authentication
const checkAdmin = (req, res, next) => {
    if(req.query.admin === 'true') {
        next();
    } else {
        res.status(400).send('should be admin');
    }
}

const cart = [];
const getCart = (req, res) => {

    res.send(cart);
}
// code to add books to the cart
const addBooks = (req, res) => {
    const book = req.body;
    cart.push(book);
    res.send(`Book with the name ${book.bookName} by ${book.author}  added to the database`);
}
// code to remove book from cart
const removeBook = (req, res) => {
    const id = req.params.id;
    const book = cart[id]
    cart.splice(id, 1);
    res.send(`Book with the id  ${id} has been deleted`);
}
app.get('/cart', getCart);
app.post('/cart', addBooks);
app.delete('/cart/:id', checkAdmin, removeBook); // only admins will be able to delete

app.get('/', function (req, res, next) {
    res.send('Welcome to bookHub!');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})