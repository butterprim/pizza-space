# pizza-space
An exercise with React and Typescript

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). A demo is available in [Netlify](https://hopeful-feynman-e01d49.netlify.app/).

## Project set-up
Create a database from FaunaDB and generate your own secret key to be used in this project. This [Netlify article](https://www.netlify.com/blog/2018/07/09/building-serverless-crud-apps-with-netlify-functions-faunadb/) gives a very detailed walkthrough on how to set up FaunaDB.

After generating the key, set the key to your terminal environment.
```
export FAUNADB_SERVER_SECRET=YourFaunaDBSecretHere
```

## Running the app
After installing the packages and setting up the database, you can run the app using the following commands.
```
yarn start
yarn start:lambda
```

Alternatively, you can run `yarn start` if you don't have the db set-up, but note that the following features may not work correctly:
* Placing orders after creating the pizza
* Accessing `/receipt/:id`

