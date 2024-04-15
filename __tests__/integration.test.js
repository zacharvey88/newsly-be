const db = require("../db/connection");
const seed = require("../db/seeds/seed");
const testData = require("../db/data/test-data");
const request = require("supertest");
const app = require("../app");

beforeEach(() => seed(testData));
afterAll(() => db.end());


//Invalid Endpoint

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


//api/topics

describe("/api/topics", () => {

  test("GET: Requests to this endpoint should respond with an array of topic objects, each with slug and description properties", () => {
    return request(app)
    .get("/api/topics")
    .expect(200)
    .then(({body})=>{
      const topics = body
      expect(topics.length).toBe(3)
      topics.forEach(topic => {
        expect(typeof topic.slug).toBe("string")
        expect(typeof topic.slug).toBe("string")
      })
    })
  })

});