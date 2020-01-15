# Full Stack Dev Test
Based on NodeJS(v12.14.1), NestJS, MongoDB(v3.6.3), VueJS, NuxtJS, Vuetify for material design

Make sure, NodeJS(v12.14.1), MongoDB (v3.6.3) are installed to run locally

    - `node --version`
    - `npm --version`
    - `mongo --version`

1. Assignment One/html-template - contains responsive html css files
2. Assignment Two contains two folder: `movie` and `movie-api`
    - each folder contains it's own Dockerfile
    - `movie` is client folder built on `VueJS` and `NuxtJS`
    - `movie-api` is `NestJS` API using MongoDB as the NoSQL Database
    - `movie` client is consuming the `CRUD API` from `movie-api`
    - To run locally:
    - `cd movie-api && npm i -d && npm run start`
    - `cd movie && npm i -d && npm start`
    
3.  Assignment Three contains `users.sql`
    - contains the solutions for both the 1st and 2nd SQL problems
    
3.  Assignment Four contains `console_csv.py`
    - Need to change the `mongodb` connection and file path of the `csv`

5. Assignment Five contains two folder: `product` and `product-api`
    - each folder contains it's own Dockerfile
    - `product` is client folder built on `VueJS` and `NuxtJS`
    - `product-api` is `NestJS` API using MongoDB as the NoSQL Database
    - `product` client is consuming the `CRUD API` from `product-api`
    -  To run locally:
    - `cd product-api && npm i -d && npm run start`
    - `cd product && npm i -d && npm start`
