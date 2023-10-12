/**
    for find mongodb query 
    https://mongoplayground.net/ 
    online compalar
*/

// this type of query give both condition are true than result is same

// for objects or arrays inside objects
db.collection.find({
    "friends.age": 27,
    "friends.name": "Joseph",
});

// for array and sigle keys
db.collection.find({
    age: 32,
    hobbies: "cooking",
});

// also we can use $gt, $lt, $lte, $eq , $ne
db.collection.find({
    age: {
        $gte: 32,
    },
    hobbies: "cooking",
});

db.collection.findOne({
    age: 32,
});

// for objects
db.collection.find({
    "address.state": "OH",
});

db.collection.find({
    age: {
        $gt: 27,
        $lt: 30,
    },
});

// second agrument for sorting data
db.collection.find(
    {
        age: 32,
    },
    {
        email: 1,
        name: 1,
    }
);

// in opetator use for search multipl value for same key
db.collection.find(
    {
        age: {
            $in: [30, 32],
        },
    },
    {
        email: 1,
        name: 1,
        age: 1,
    }
);

// $in operator with array
db.collection.find(
    {
        hobbies: {
            $in: ["reading", "painting"],
        },
    },
    {
        email: 1,
        name: 1,
        age: 1,
        hobbies: 1,
    }
);

// $in oprator with object
db.collection.find(
    {
        "address.state": {
            $in: ["OH", "CO"],
        },
    },
    {
        email: 1,
        name: 1,
        age: 1,
        address: 1,
    }
);

// $in oprator with array inside object
db.collection.find(
    {
        "friends.age": {
            $in: [33, 28],
        },
    },
    {
        name: 1,
        age: 1,
        friends: 1,
    }
);

/** same for $nin oprator query like $in oprator */

// for $and oparator (if all condition are true)
db.collection.find(
    {
        age: {
            $gte: 35,
        },
        $and: [
            {
                "friends.name": "Jennifer",
                "friends.age": 36,
            },
            {
                "address.city": "Denver",
            },
        ],
    },
    {
        name: 1,
        age: 1,
        friends: 1,
    }
);

// if all condion true than return that doc
db.collection.find(
    {
        age: {
            $gte: 30,
        },
        $and: [
            {
                "friends.age": {
                    $gte: 30,
                },
                "address.state": "OH",
            },
            {
                "address.city": "Columbus",
            },
        ],
    },
    {
        name: 1,
        age: 1,
        friends: 1,
        address: 1,
    }
);

// for $or oparator if fist age condition true than check $or oprator condition if one of tham true than give output
db.collection.find(
    {
        age: {
            $gte: 30,
        },
        $or: [
            {
                "friends.age": {
                    $gte: 30,
                },
                "address.state": "OH",
            },
            {
                "address.city": "Denver",
            },
        ],
    },
    {
        name: 1,
        age: 1,
        friends: 1,
        address: 1,
    }
);

/* $nor oprator condition work as and condition also both condion are false than that recode consider  
    if first condition is nested condition than they work like $and oprator condition if sigle conditions are false than that condition consider as false 
*/
db.collection.find(
    {
        age: {
            $gte: 30,
        },
        $nor: [
            {
                "friends.age": {
                    $gte: 30,
                },
                "address.state": "OH",
            },
            {
                "address.city": "Seattle",
            },
        ],
    },
    {
        name: 1,
        age: 1,
        friends: 1,
        address: 1,
    }
);

// $not oprator condition work as like [!] this
db.collection.find(
    {
        age: {
            $gte: 30,
        },
        $and: [
            {
                "friends.age": {
                    $not: {
                        $gte: 31,
                    },
                },
                "address.state": "OH",
            },
            {
                "address.city": "Columbus",
            },
        ],
    },
    {
        name: 1,
        age: 1,
        friends: 1,
        address: 1,
    }
);

// $exists oprator check key exists or not is boolen
db.collection.find(
    {
        age: {
            $gte: 30,
        },
        $and: [
            {
                "friends.age": {
                    $not: {
                        $gte: 31,
                    },
                },
                "address.state": "OH",
            },
            {
                "address.city": "Columbus",
            },
            {
                email: {
                    $exists: false,
                },
            },
        ],
    },
    {
        name: 1,
        age: 1,
        friends: 1,
        address: 1,
    }
);

// $type oprator use for check typeof any key like string, bool, object, array
db.collection.find(
    {
        age: {
            $gte: 30,
        },
        $and: [
            {
                "friends.age": {
                    $not: {
                        $gte: 31,
                    },
                },
                "address.state": "OH",
            },
            {
                "address.city": "Columbus",
            },
            {
                email: {
                    $exists: true,
                    $type: "bool",
                },
            },
        ],
    },
    {
        name: 1,
        age: 1,
        friends: 1,
        address: 1,
    }
);

// $regex oprator use for javascript regular expression
db.user
    .find({
        name: {
            $regex: /^John/,
        },
    })
    .count();

// $mod oprator use for in arrray two value first for divisor and second value for remainder [ divisor, remainder ]
db.collection.find({
    age: {
        $mod: [3, 0],
    },
});

/**
 * Array find method
 */

// $all operator  use for array give all values availbles
db.collection.find({
    hobbies: {
        $all: ["reading", "painting"],
    },
});

// this work on array inside object also all value is true than give responce
db.collection.find({
    friends: {
        $elemMatch: {
            name: "Jessica",
            age: 27,
        },
    },
});

// same as above
db.collection.find({
    "friends.name": "Jessica",
    "friends.age": 27,
});

db.collection.find({
    friends: {
        $elemMatch: {
            name: "Jessica",
            age: {
                $gt: 26,
            },
        },
    },
});

db.collection.find({
    friends: {
        $elemMatch: {
            name: {
                $ne: "Jessica",
            },
            age: {
                $gt: 32,
            },
        },
    },
});

// same as above
db.collection.find({
    "friends.name": {
        $ne: "Jessica",
    },
    "friends.age": {
        $gt: 32,
    },
});

// if all condition are true inside that array of object
db.collection.find({
    friends: {
        $all: [
            {
                $elemMatch: {
                    name: "Jessica",
                    age: 27,
                },
            },
            {
                $elemMatch: {
                    name: "Daniel",
                    age: 29,
                },
            },
        ],
    },
});

// this all defalut key are available in object all defined object
db.collection.find({
    friends: {
        $all: [
            {
                name: "Jessica",
                age: 27,
            },
            {
                name: "Daniel",
                age: 29,
            },
        ],
    },
});

// $size oprator check array of lenght and match lenght return
db.collection.find({
    friends: {
        $size: 2,
    },
});
