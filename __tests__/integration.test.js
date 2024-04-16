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

  test("GET 400: Returns a 400 error for invalid endpoints", () => {
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
      const {endpoints} = body
      expect(endpoints).toEqual(endpoints)
    })
  })

});

// api/topics

describe("/api/topics", () => {

  test("GET: Requests to this endpoint should respond with an array of all topic objects, each with slug and description properties", () => {
    return request(app)
    .get("/api/topics")
    .expect(200)
    .then(({body})=>{
      const {topics} = body
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

// api/articles

describe("/api/articles", () => {

  test("GET: Requests to this endpoint should respond with an array of all article objects, sorted in descending date order each with author, title, article_id, topic, created_at, votes, article_img_url and comment_count properties", () => {
    return request(app)
    .get("/api/articles")
    .expect(200)
    .then(({body})=>{
      const {articles} = body
      expect(Array.isArray(articles)).toBe(true)
      expect(articles.length).toBe(13)
      expect(articles).toBeSortedBy("created_at", {descending: true})
      articles.forEach(article => {
        expect(article).toMatchObject({
          article_id: expect.any(Number),
          title: expect.any(String),
          topic: expect.any(String),
          author: expect.any(String),
          created_at: expect.any(String),
          votes: expect.any(Number),
          article_img_url:expect.any(String),
          comment_count: expect.any(Number)
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
        article_id: 3,
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

  test("GET 404: Requests that return no results due to a non-existent ID should return a 404 error with a relevant message", () => {
    return request(app)
    .get("/api/articles/666")
    .expect(404)
    .then(({body})=>{
      const {msg} = body
      expect(msg).toBe("Not found")
    })
  })

  test("GET 400: Requests that contain an invalid ID should return a 400 error with a relevant message", () => {
    return request(app)
    .get("/api/articles/not-a-number")
    .expect(400)
    .then(({body})=>{
      const {msg} = body
      expect(msg).toBe("Bad request")
    })
  })

});


// api/articles/:article_id/comments

describe("/api/articles/:article_id/comments", () => {

  test("GET: Requests to this endpoint should respond with an array of all the comments with the requested article_id, each with the following properties; comment_id, author, body, votes, created_at, article_id", () => {
    return request(app)
    .get("/api/articles/3/comments")
    .expect(200)
    .then(({body})=>{
      const {comments} = body
      expect(comments.length).toBe(2)
      expect(comments).toBeSortedBy("created_at", {descending: true})
      comments.forEach(comment => {
        expect(comment).toMatchObject({
          comment_id: expect.any(Number),
          article_id: 3,
          author: expect.any(String),
          body: expect.any(String),
          created_at: expect.any(String),
          votes: expect.any(Number),
        })
      })
    })
  })

  test("GET EMPTY: When there are no comments for the requested article, request should still return an empty array", () => {
    return request(app)
    .get("/api/articles/2/comments")
    .expect(200)
    .then(({body})=>{
      const {comments} = body
      expect(comments).toEqual([])
    })
  })

  test("GET 404: Requests that return no results due to a non-existent ID should return a 404 error with a relevant message", () => {
    return request(app)
    .get("/api/articles/666/comments")
    .expect(404)
    .then(({body})=>{
      const {msg} = body
      expect(msg).toBe("Not found")
    })
  })

  test("GET 400: Requests that contain an invalid ID should return a 400 error with a relevant message", () => {
    return request(app)
    .get("/api/articles/not-a-number/comments")
    .expect(400)
    .then(({body})=>{
      const {msg} = body
      expect(msg).toBe("Bad request")
    })
  })

  test("POST: Successfull posts to this endpoint should respond with 201 and the newly added comment inluding comment_id, author, body, votes, created_at, article_id", () => {
    return request(app)
    .post("/api/articles/3/comments")
    .send({
      username: "theRealDumbledore",
      body: "It does not do to dwell on dreams, and forget to live"
    })
    .expect(201)
    .then(({body})=>{
      const {comment} = body
      expect(comment).toEqual({
        comment_id: 19,
        article_id: 3,
        author: "theRealDumbledore",
        body: "It does not do to dwell on dreams, and forget to live",
        created_at: expect.any(String),
        votes: 0,
      })
      })
    })

    test("POST 404 article_id: Posts to a non-existent ID should return a 404 error with a relevant message", () => {
      return request(app)
      .post("/api/articles/666/comments")
      .send({
        username: "swishandflick",
        body: "It's leviosa not leviosa"
      })
      .expect(404)
      .then(({body})=>{
        const {msg} = body
        expect(msg).toBe("Not found")
      })
    })


    test("POST 404 username: Posts with a username that's not in the database will return a 404 error with a relevant message", () => {
      return request(app)
      .post("/api/articles/3/comments")
      .send({
        username: "notthedarklord",
        body: "Avada Kedavra"
      })
      .expect(404)
      .then(({body})=>{
        const {msg} = body
        expect(msg).toBe("Not found")
      })
    })
  
    test("POST 400: Posts to invalid ID should return a 400 error with a relevant message", () => {
      return request(app)
      .post("/api/articles/not-a-number/comments")
      .send({
        username: "marauder5",
        body: "I solemnly swear I am up to no good"
      })
      .expect(400)
      .then(({body})=>{
        const {msg} = body
        expect(msg).toBe("Bad request")
      })
    })


});
