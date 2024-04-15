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

// api/articles/:article_id

describe("/api/articles/:article_id", () => {

  test("GET: Requests to this endpoint should respond with single object with an id matching the request and the following properties; author, title, article_id, body ,topic, created_at, votes, article_img_url", () => {
    return request(app)
    .get("/api/articles/3")
    .expect(200)
    .then(({body})=>{
      const {article} = body
      expect(article).toMatchObject({
        article_id: expect.any(Number),
        title: expect.any(String),
        topic: expect.any(String),
        author: expect.any(String),
        body: expect.any(String),
        created_at: expect.any(String),
        votes: expect.any(Number),
        article_img_url:expect.any(String)
      })
    })
  })

  test("GET ERROR 404: Requests that return no results due to a non-existent ID should return a 404 error with a relevant message", () => {
    return request(app)
    .get("/api/articles/666")
    .expect(404)
    .then(({body})=>{
      const {msg} = body
      expect(msg).toBe("Not found")
    })
  })

  test("GET ERROR 400: Requests that contain an invalid ID should return a 400 error with a relevant message", () => {
    return request(app)
    .get("/api/articles/not-a-number")
    .expect(400)
    .then(({body})=>{
      const {msg} = body
      expect(msg).toBe("Bad request")
    })
  })

});