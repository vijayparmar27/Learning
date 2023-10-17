import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { userQuery, getuser, newUser } from "./resolvers"


const rootQueryTypes = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        userQuery,
        getuser
    })
})

export const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        newUser
    })
});


export const schema = new GraphQLSchema({
    query: rootQueryTypes,
    mutation: RootMutationType,
    
});