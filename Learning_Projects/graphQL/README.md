    import express from "express";
    import { ApolloServer } from "@apollo/server";
    import { expressMiddleware } from "@apollo/server/express4";
    import { userData, userDetails } from "./objectData";

    (async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const apolloServer = new ApolloServer({
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
        user : (data)=>{
            const res = userDetails.find((data1) => data1._id == data._id);
            return res;
        }
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

    app.use("/graphql", expressMiddleware(apolloServer));

    app.listen(8000, () => console.log("Serevr Started at PORT 8000"));
    })();


----


    export const userData = [
        {
            _id: 1,
            name: "dev",
            userName: "new dev",
        },
        {
            _id: 2,
            name: "dev1",
            username: "new dev1",
        },
        ];

        export const userDetails = [
            {
                _id : 1,
                typeOfDev : "backend",
                frameWork : "nodejs"
            },
            {
                _id : 2,
                typeOfDev : "frontend",
                frameWork : "reactjs"
            },
        ]