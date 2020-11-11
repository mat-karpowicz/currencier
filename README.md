# 💰 Currencier 💰


## Table of contents
* [General info](#general-info)
* [Installation](#installation)
* [Technologies](#technologies)

## General info

Currencier is a web app that lets user follow average exchange rate for their favourite currencies. Exchange rates are fetched from NBP API (https://api.nbp.pl/).

User can: 
* check the list of all currencies,
* add currency to the favourite list,
* remove one or all currencies from the favourite list,
* search for chosen currency.

## Installation

To run this project, install it locally using npm. First - clone the repo and change directory:

```
$ cd currencier\
```

Next - install packages:

```
$ npm install
```

Run project by: 

```
$ npm start
```

Project will be available at: http://localhost:3000/

## Technologies

* React v17.0.1 - JavaScript framework
* node-sass v4.14.1 - for using '.scss' files for styles
* prop-types v15.7.2 - for type-checking props
### DevDependencies
* ESLint with airbnb config - for linting
* Prettier - for formatting
