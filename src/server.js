require('dotenv').config();
const app = require('./app');
const populateDummyData = require('./database/database_seed');


const environment = process.env.NODE_ENV || 'dev';

app.listen(process.env.PORT, () => {
  console.log(`Express started on port ${process.env.PORT}`);

  // Seed the database with some data
  if (environment === 'dev') {
    populateDummyData();
  }
});
