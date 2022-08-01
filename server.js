const express=require('express');
const { graphqlHTTP } = require('express-graphql');
const gqlSchema=require('./graphql/schema')
const {movie, searchedMovies}=require('./graphql/resolvers')
const app=express();
const cors = require('cors');

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema:gqlSchema,
    rootValue:{
        movie,
        searchedMovies
    },
    graphiql:true
}))

app.listen(5000, ()=>console.log('server listening on port 5000'));
