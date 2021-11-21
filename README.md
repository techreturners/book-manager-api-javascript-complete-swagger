# 📖 Minimalist Book Manager API

## Introduction
This is the starter repository for the Further APIs session. It provides a start to creating a Minimalist Book Manager API.

### Pre-Requisites
- NodeJS installed (v14.18.1 Long Term Support version at time of writing)

### Technologies & Dependencies

- [ExpressJS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite3](https://www.npmjs.com/package/sqlite3)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [ESLint](https://eslint.org/)

### How to Get Started

- Fork this repo to your Github and then clone the forked version of this repo

### Running the application

In order to run the application, firstly install the dependencies (if you haven't already done so)

```
npm install
```

Next, create a `.env.dev` configuration file in the root of your repository with the settings you'd like to run the application against for the development environment.
You can utilise the same settings specified in `.env` if you wish.

To run the application against different environments, please create a `.env.test` and a `.env.prod` in the root of the repository to specify configuration for these environments.


You can then add a new script to the scripts section of the `package.json` to run the script for your specific environment. For example, the script below will enable you to run against the production configuration.

```JavaScript
"scripts": {
  "start": "node src/server.js",
  "start-prod": "NODE_ENV=prod node src/server.js",
  "test": "jest"
},
```


```

npm start-prod

```

### Running the Unit Tests

In order to run the unit tests run, firstly install the dependencies (if you haven't already done so)

```
npm install
```

Followed by:

```
npm test
```

### Tasks

Here are some tasks for you to work on:

📘 Task 1: Implement the following User Story with tests.

`User Story: As a user, I want to use the Book Manager API to delete a book using its ID`


📘 Extension Task: Oh no! 😭 We've only covered the happy paths in the solution, can you figure out a way
to add in exception handling to the project? 

- Clue 1: What if someone wants to add a book with an ID for a book that already exists? How do we handle this gracefully?


- Clue 2: What if someone wants to find a book by an ID that doesn't yet exist? 
  How can we improve the API by handling errors gracefully and show a helpful message to the client?
