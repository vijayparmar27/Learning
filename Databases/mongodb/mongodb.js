/**
    for find mongodb query 
*/

// this type of query give both condition are true than result is same 

// for objects or arrays inside objects
db.collection.find({
    "friends.age": 27,
    "friends.name": "Joseph"
});

// for array and sigle keys
db.collection.find({
    "age": 32,
    "hobbies": "cooking"
})

// also we can use $gt, $lt, $lte, $eq , $ne 
db.collection.find({
    "age": {
        "$gte": 32
    },
    "hobbies": "cooking"
});

db.collection.findOne({
    "age": 32
});

// for objects 
db.collection.find({
    "address.state": "OH"
});

db.collection.find({
    age: {
        $gt: 27,
        $lt: 30
    }
});


