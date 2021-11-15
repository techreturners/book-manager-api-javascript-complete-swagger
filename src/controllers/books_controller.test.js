const {bookService} = require('../services');
jest.mock('../services/books');


const request = require('supertest');
const app = require('../app');

const dummyBookData = [
  {
    id: 1,
    title: 'The Hobbit',
    description: 'The Hobbit, or There and Back Again is a children\'s fantasy novel by English author J. R. R. Tolkien.',
    author: 'J. R. R. Tolkien',
    genre: 'Fantasy',
  },
  {
    id: 2,
    title: 'Before the Coffee Gets Cold',
    description: 'In a small back alley in Tokyo, there is a cafe which has been serving carefully brewed coffee for more than one hundred years.',
    author: 'Toshikazu Kawaguchi',
    genre: 'Education',
  },
];

afterEach(() => {    
  jest.clearAllMocks();
});

describe('GET /api/v1/books endpoint', () => {
  test('status code successfully 200', async () => {
    // Act
    const res = await request(app).get('/api/v1/books');

    // Assert
    expect(res.statusCode).toEqual(200);
  });

  test('books successfully returned as empty array when no data', async () => {

    bookService.getBooks = jest.fn().mockReturnValue([]);
    // Act
    const res = await request(app).get('/api/v1/books');

    // Assert
    expect(res.body).toEqual([]);
  });

  test('books successfully returned as array of books', async () => {

    bookService.getBooks = jest.fn().mockReturnValue(dummyBookData);
    // Act
    const res = await request(app).get('/api/v1/books');

    // Assert
    expect(res.body).toEqual(dummyBookData);
  });
});
