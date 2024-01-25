const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const gqlSchema = require('./graphql/schema');
const { movie, searchedMovies } = require('./graphql/resolvers');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: gqlSchema,
    rootValue: {
      movie,
      searchedMovies,
    },
    graphiql: true,
  })
);
app.use(express.static(path.join(__dirname, './client/out')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/out/'));
});

app.listen(4000, () => console.log('server listening on port 4000'));

// Production Mode
// if (process.env.NODE_ENV.toLowerCase() === 'production') {
//   // Serve Any Static Files
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }
