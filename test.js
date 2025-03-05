import needle from 'needle';

needle.post(
	'http://localhost:3003/add-book', {
    	Name: 'Harry Potter and the Philosopher\'s Stone',
    	ISBN: '978-0-07475-3269-9',
    	Author: 'J.K. Rowling',
    	Year: 1997
	},
	(err,res) => {
    	console.log(res.body);
	}
);

needle.post(
	'http://localhost:3003/add-book', {
    	Name: 'Harry Potter and the Chamber of Secrets',
    	ISBN: '0-7475-03849-2',
    	Author: 'J.K. Rowling',
    	Year: 1998
	},
	(err,res) => {
    	console.log(res.body);
	}
);

needle.post(
    'http://localhost:3003/add-book', {
        Name: "The Little Prince", 
        ISBN: "978-0156012195", 
        Author: "Antoine Saint-Exupery", 
        Year: 1943 
    },
    (err, res) => {
        console.log(res.body);
    }
)

needle.get(
	'http://localhost:3003/find-by-isbn-author', (err, res) => {
    	console.log(res.body);
	}
)
