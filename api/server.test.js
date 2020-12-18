const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db('users').truncate();
});

afterAll(async () => {
  await db.destroy();
});

// Write your tests here
test('Sanity Check:', () => {
  expect(true).toBe(true);
});

describe("Endpoint Testing:", () => {
  describe('POST /api/auth', () => {
    it('responds with status code 400 if no credentials', () => {
      return request(server).post('/api/auth/register')
        .send({})
        .then((res) => {
          expect(res.status).toBe(400);
        });
    });

    it('responds with status code 201 on success', () => {
       request(server).post('/api/auth/register')
        .send({ username: "admin", password: "password" })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
  });
})