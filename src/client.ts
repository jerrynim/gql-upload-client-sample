const { ApolloClient } = require("apollo-client");
const { InMemoryCache } = require("apollo-cache-inmemory");
const { createUploadLink } = require("apollo-upload-client");

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: "http://localhost:4000/" })
});

export default client;
