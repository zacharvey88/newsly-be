# Northcoders News API

In order to connect to the database you will need to set local variables for PGDATABASE. 

Create the following files and in each, initialise PGDATABASE with the relevant database name as provided privately.
```
.env.test
.env.development
```

## Available Paths
To get a list of available request paths, use a **GET** request to the path `/api`. This will provide an object with properties realting to each path.