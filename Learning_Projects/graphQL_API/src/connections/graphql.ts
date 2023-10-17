import { ApolloServer } from "@apollo/server";
import { schema } from "../graphql";

let apolloServer: ApolloServer;

export async function apolloServerConnection() {

  if (!apolloServer) {
    apolloServer = new ApolloServer({
      schema: schema
    });

    await apolloServer.start();
  }

  return apolloServer;
}
