import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = (event, context, callback) => {
  const parameters = event.queryStringParameters;
  const pizza = JSON.parse(parameters.q);

  return client.query(q.Create(q.Collection('pizzaOrders'), { data: pizza }))
  .then((response) => {
    console.log("success", response)
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(getRefIdFromResponse(response))
    });
  }).catch((error) => {
    console.log("error", error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    });
  });
}

function getRefIdFromResponse(response) {
  const ref = response.ref;
  if (ref) {
    return ref.id;
  }
  return null;
}