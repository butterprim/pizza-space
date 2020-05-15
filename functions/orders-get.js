import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
});

exports.handler = (event, context, callback) => {
  const parameters = event.queryStringParameters;
  const refId = parameters.q;

  return client.query(
    q.Get(q.Ref(q.Collection('pizzaOrders'), refId))
  )
  .then((response) => {
    console.log("success", response.data);
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response.data)
    });
  }).catch((error) => {
    console.log("error", error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    });
  });
}
