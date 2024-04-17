![NC News](/assets/images/nc-news-project.png)

**NC NEWS** is my first solo full-stack project, with the aim of highlighting my capabilities as a new software developer. It is a hosted news application featuring a variety of fun articles, each with topic tags, a comments section and the ability to upvote. Every new comment must be associated with an existing user. Current user functionality allows for the retrieval of articles, comments topics and users, and the addition and deletion of comments.

You can test the app here: [NC NEWS](https://nc-news-ngma.onrender.com)

Alternatively, to make a local clone of the repo for yourself:
1. copy this URL: https://github.com/zacharvey88/nc-news.git.
2. In your command line interface, navigate to the folder you'd like to create the repo in.
3. enter command `git clone` followed by the repo URL.
4. Finally open the directory in your chosen code editor and refer to further instrctions below.


## Environment Set-up

To get started, install dependencies. Run command `npm install`

> Minimum versions required:
> - Node.js 21.4.0
> - Postgres 14.10

In order to connect to the database you will need to set local variables for PGDATABASE. 

Create the following files. In each, initialise PGDATABASE with the relevant database name as provided privately.
```
.env.test
.env.development
```


## Database Set-up

1. Create the database. Run command `npm run setup-dbs`
2. Create tables and populate the database. Run command `npm run seed`


## Available Paths

To get a list of available request paths, use a **GET** request to the path `/api`. This will provide a JSON object with a description of each path.


## Testing

To run tests please ensure the following packages are installed as dev dependencies.

- jest: 27.5.1
- jest-extended: 2.0.0
- jest-sorted: 1.0.15
- supertest: 6.3.4

To run the test suite `npm test`. You may further specify either `utils` or `integration` test file.
- `integration.test.js` contains the funcationality testing for all request paths.
- `utils.test.js` contains a few unit tests, mainly for seeding purposes.
