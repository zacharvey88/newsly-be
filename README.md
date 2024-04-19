![NC News](/assets/images/nc-news-project.png)

**NC NEWS** is my first solo full-stack project, with the aim of highlighting my capabilities as a new software developer. It is a hosted news site build using Node.js and PSQL. The database features a variety of fun articles, each with topic tags, a comments section and the ability to upvote. Current user functionality allows for the retrieval of articles, comments topics and users, and the addition and deletion of comments. Additionally, responses from /api/articles can be queried and sorted. The front end is yet to be developed to stay tuned!

You can test the app here: [NC NEWS](https://nc-news-ngma.onrender.com)

Simply enter a valid URL path to retrieve information from the database. (Best viewed with a browser JSON formatter)

To get a detailed list of available paths, append the URL with `/api`

## Create a clone

Alternatively, to make a local clone of the repo for yourself:
1. In your terminal, navigate to the desired directory
2. Run this command: `git clone https://github.com/zacharvey88/nc-news.git` 
3. Open the directory in your chosen code editor and refer to further instructions below.


## Environment Set-up

Minimum versions required:
> Node.js `21.4.0`  

> Postgres `14.10`

First, install dependencies `npm install`

In order to connect to the database you will need to set local variables for PGDATABASE. 

Create the following files. In each, initialise PGDATABASE with the relevant database name as provided privately.

`.env.test`  

`.env.development`


## Database Set-up

1. Create the database `npm run setup-dbs`
2. Create tables and seed the database `npm run seed`


## Available Paths

To get a full list of available request paths with further information, make a **GET** request to the path `/api`. This will provide a JSON object with a description of each path.

>/api/articles `GET` `POST`  
>
>/api/articles/:article_id `GET` `PATCH` `DELETE`  
>
>/api/articles/:article_id/comments `GET` `POST`  
>
>/api/comments/comment_id `PATCH` `DELETE`  
>
>/api/users `GET` `POST`  
>
>/api/users/username `GET`  
>
>/api/topics `GET` `POST`  
>
>/api/topics_id `GET`


## Testing

To run tests please ensure the following packages are installed as dev dependencies.

`npm i jest -D` 27.5.1  

`npm i jest-extended -D` 2.0.0  

`npm i jest-sorted -D` 1.0.15  

`npm i supertest -D` 6.3.4  


To run the test suite use command `npm test`. You may further specify either `utils` or `integration` test file.
`integration.test.js` contains the functionality testing for all request paths.
`utils.test.js` contains a few unit tests, mainly for seeding purposes.


### Acknowledgements

The boilerplate for this repository (inc seed files) was provided by Northcoders as part of our bootcamp curriculum.