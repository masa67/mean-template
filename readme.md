
# Introduction

This is a simple demonstration of AngularJS and MEAN.

The demo is based on two excellent tutorials on building a RESTful service with NodeJS, Express and MongoDB:

* [The Dead-Simple Step-by-Step Guide for Front-End Developers to Getting Up and Running with Node.JS, Express, Jade, and MongoDB](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/)
* [Creating a Simple RESTful Web App with Node.js, Express, and MongoDB](http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/)

This project takes the example system further by replacing the frontend with AngularJS. The backend is kept intact, except for replacing Jade with plain HTML (as it makes sense to learn AngularJS with plain HTML first).

# Installation

Follow the guidelines given in the two tutorials:

* Install [Node.js](http://nodejs.org/).
* Install Express:


    $ npm install -g express
    $ npm install -g express-generator

* Install [MongoDB](https://www.mongodb.org). Start the daemon.
* Install `node_modules`:


    $ npm install

As an additional step, to get some initial data to the database:

    $ mongo db-init/mean-template-init.js

# Execution

Start the server:

    $ npm start

Open the URL in a browser: `http://localhost:3000/`

# Version History

* v.2.0: Replaces `$http` in `UsersService` with `$resource`, the Angular way of accessing RESTful APIs.
* v.1.0: The first functional version.

# License

The MIT License