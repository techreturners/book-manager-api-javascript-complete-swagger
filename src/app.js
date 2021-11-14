const express = require('express');
const app = express();
const routes = require('./routes');

// Enable JSON parsing
// Prior to v4.16.0 you might have seen
// examples of people using body-parser
app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the Drinks API!'));

app.use('/api', routes);

console.log('Express started on port 3000');
app.listen(3000);
