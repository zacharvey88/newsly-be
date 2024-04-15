const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const testData = require("../db/data/test-data");
const request = require("supertest");
const app = require("../app");
const endpoints = require('../endpoints.json')

beforeEach(() => seed(testData));
afterAll(() => db.end());


// Invalid Endpoint

describe("/*", () => {

  test("Returns a 400 error for invalid endpoints", () => {
    return request(app)
      .get("/api/path-doesnt-exist")
      .expect(400)
      .then(({ body }) => {
        const { msg } = body;
        expect(msg).toBe("Invalid path");
      });
  });
  
});

// api

describe("/api", () => {

  test("GET: Requests to this endpoint should respond with an object containing all endpoints with a description", () => {
    return request(app)
    .get("/api")
    .then(({body})=>{
      expect(body).toEqual(endpoints)
    })
  })

});

// api/topics

describe("/api/topics", () => {

  test("GET: Requests to this endpoint should respond with an array of topic objects, each with slug and description properties", () => {
    return request(app)
    .get("/api/topics")
    .expect(200)
    .then(({body})=>{
      const topics = body
      expect(topics.length).toBe(3)
      expect(Array.isArray(topics)).toBe(true)
      topics.forEach(topic => {
        expect(topic).toMatchObject({
          slug: expect.any(String),
          description: expect.any(String)
        });
      })
    })
  })

});