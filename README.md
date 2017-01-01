# react-starter-webpack

A base boilerplate React project which is ready to use for prototyping and production deployment. It has built in node server configured and utilizes the power of Webpack for module bundling.

## Usage

Download or fork the project and
```
$ npm install
```
to install dependencies.

## Setup

### Development

To start a local dev node server and build the project
```
$ npm start
```
Above starts node local server on 3100, builds the project and watches for changes under `/src`

### Production

Runs Webpack for production release and creates `bundle.js` and source-map
```
$ npm postinstall
```

## Features

* Expressive and intuitive Node server setup, with proxying capabilities
* Super fast build using Webpack
* SASS support
* Ready for prototyping
* Production ready - deploy to any of node supported server and the project is up and running
* Uses Redux
* Hot Module Replacement

## Live app

Code from the stable branch is automaticalluy deployed to Heroku servers. Check the app under
```
https://react-starter-webpack.herokuapp.com/
```

## Author

- [Guna](https://github.com/Gunavel)
