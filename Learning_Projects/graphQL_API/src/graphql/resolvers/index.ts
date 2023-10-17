import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { userData, userDetails } from "../../objectData";

const userDetailsTypeDef = new GraphQLObjectType({
    name: "userDetails",
    description: "user details",
    fields: () => ({
        typeOfDev: { type: GraphQLString },
        frameWork: { type: GraphQLString },
    })
});

function userInfo(payload: any) {
    console.log("------->> payload :: ", payload)
    const res = userDetails.find((data) => data._id == payload._id);
    return res;
}

const userTypeDef = new GraphQLObjectType({
    name: "user",
    description: "user data",
    fields: () => ({
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        user: {
            type: userDetailsTypeDef,
            // resolve: (payload) => {
            //     console.log("------->> payload :: ", payload)
            //     const res = userDetails.find((data) => data._id == payload._id);
            //     return res;
            // },
            resolve: userInfo,
        }
    }),
});

export const userQuery = {
    type: new GraphQLList(userTypeDef),
    description: "list of users",
    resolve: () => userData,
}

export const getuser = {
    type: userDetailsTypeDef,
    description: "user details ...",
    args: {
        id: { type: GraphQLInt }
    },
    resolve: (parant: any, data: any, req: any) => {
        // console.log("------->> req :: ", req)
        const res = userDetails.find((data1) => data1._id == data.id);
        console.log(`---->> res :: `, res);
        return res;
    }
}

// mulatations 
export const newUser = {
    type: userTypeDef,
    description: "new user",
    args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
    },
    resolve: (parant: any, obj: any) => {
        console.log("Query ::: newUser :: ", obj);
        return {
            name: obj.name,
            username: obj.username,
        };
    }
}