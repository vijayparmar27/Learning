import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { apolloServerConnection } from "./graphql";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export async function serverConnection() {
  const apolloServer = await apolloServerConnection();

  app.use("/graphql", expressMiddleware(apolloServer,{
    context:  ({req} : any) => { return req; }
  }));

  app.listen(8000, () => console.log("Serevr Started at PORT 8000"));
}
