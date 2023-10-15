import { ApolloServer } from "@apollo/server";
import { userData, userDetails } from "../objectData";

let apolloServer: ApolloServer;

export async function apolloServerConnection() {

  if (!apolloServer) {
    apolloServer = new ApolloServer({
      typeDefs: `
          
            type UserDetail{
                typeOfDev : String
                frameWork: String
            }

            type User {
                name : String
                username: String
                user: UserDetail
            }

            type Query{
                getAllUsers : [User]
                getuser(id: ID!) : UserDetail
            }

            type Mutation{
                newUser(name: String,username : String) : User
            }
        `,
      resolvers: {
        User: {
          user: (data) => {
            const res = userDetails.find((data1) => data1._id == data._id);
            return res;
          },
        },
        Query: {
          getAllUsers: () => userData,
          getuser: (parant: any, { id }) => {
            console.log("Query ::: id :: ", id, typeof id);
            const res = userDetails.find((data) => data._id == id);
            console.log(`---->> res :: `, res);
            return res;
          },
        },
        Mutation: {
          newUser: (parants: any, obj: any) => {
            console.log("Query ::: newUser :: ", obj);
            return {
              name: obj.name,
              username: obj.username,
            };
          },
        },
      },
    });

    await apolloServer.start();
  }

  return apolloServer;
}
