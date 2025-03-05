import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
	res.send('Hello');
});

app.post('/add-book', (req, res) => {

	if(Object.keys(req.body).length == 4){
    	if(req.body.Name.length === 0 || req.body.ISBN.length === 0 || req.body.Author.length === 0){
        	res.send('empty string')
    	} else {
        	fs.appendFileSync("books.txt", req.body.Name + ", " + req.body.ISBN + ", " + req.body.Author + ", " + req.body.Year + "\n");
        	res.send('{ success: true }');
    	}
	} else {
    	res.send('missing field')
	}

});

app.get('/find-by-isbn-author', (req, res) => {
    
    var books = fs.readFileSync("books.txt", { encoding: 'utf8', flag: 'r' }).split('\n');
    var exist = false; 

    for (let i=0; i<books.length; i++) {

        if (books[i].search(req.query.isbn + ", " + req.query.author) != -1) {
            res.send(books[i])
            exist = true;
        } 
    };

    if(!exist) {
        res.send("Book does not exist.");
    };

});

app.get('/find-by-author', (req, res) => {
    var books = fs.readFileSync("books.txt", { encoding: 'utf8', flag: 'r' }).split('\n');
    var exist = false;
    var text = ''

    for (let i=0; i<books.length; i++) {

        if (books[i].search(req.query.author) != -1) {
            text = text + books[i] + '<br>';
            exist = true;
        } 
    };

    if(!exist) {
        res.send("Book does not exist.");
    } else {
        res.send(text);
    };
});

app.listen(3003, () => {console.log('Server started at port 3003')});
