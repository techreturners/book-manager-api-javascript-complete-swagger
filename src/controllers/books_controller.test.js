const request = require('supertest');
const app = require('../app');

describe('Test Books API endpoint requests', () => {
  test('GET all books successfully with success status', async () => {
    // Act
    const res = await request(app).get('/api/v1/books');

    // Assert
    expect(res.statusCode).toEqual(200);
  });
});
