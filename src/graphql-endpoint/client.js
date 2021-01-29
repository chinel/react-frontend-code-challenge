import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://frontend-serverless-app.herokuapp.com/v1/graphql",
  cache: new InMemoryCache(),
});

export default client;
