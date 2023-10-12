/**
 * mongodb update query
 */

db.collection.update(
    {
        name: "John Smith",
    },
    {
        $set: {
            age: 31,
        },
    }
);

// also use for add new keys
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $set: {
            age: 31,
            dev: "node",
        },
    }
);

// $currentDate oprator use for add timestamps and date
// Sets the value of a field to current date, either as a Date or a Timestamp.
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $currentDate: {
            lastModified: true,
            date: {
                $type: "timestamp",
            },
        },
    }
);

// this query add new object and key
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $currentDate: {
            lastModified: true,
            "joinData.date": {
                $type: "date",
            },
        },
        $set: {
            "joinData.reason": "i want join...",
        },
    }
);

// $inc is incress or decress value as given
// Increments the value of the field by the specified amount.
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $inc: {
            age: 5,
        },
    }
);

// this only use on object not array inside object
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $inc: {
            age: -5,
            "address.homeNo": 1,
        },
    }
);

// $min oprator use for if age=51 than set 30 else age = 55 than not change
// Only updates the field if the specified value is less than the existing field value.
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $min: {
            age: 30,
        },
    }
);

// $max opartor use for if age = 30 than set age = 50 else age = 55 than not change
// Only updates the field if the specified value is greater than the existing field value.
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $max: {
            age: 50,
        },
    }
);

// $mul oprator multiple value and update value like (old value * 2)
// Multiplies the value of the field by the specified amount.
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $mul: {
            age: 2,
        },
    }
);

// $rename oprator use for rename field name also work only object not array inside object
// Renames a field.s
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $rename: {
            age: "oldAge",
            "address.homeNo": "address.houseNo",
        },
    }
);

// $unset oparator remove field , work on object not array inside object
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $unset: {
            age: "",
            "address.city": "",
        },
    }
);

/**
 * Array update query
 */

// find fist element and update
db.collection.update(
    {
        name: "John Smith",
        "friends.age": 28,
    },
    {
        $set: {
            "friends.$.name": "vijay",
        },
    }
);

// all replace anime in array
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $set: {
            "friends.$[].name": "vijay",
        },
    }
);

// all replace anime in array
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $set: {
            "hobbies.$[]": "anime",
        },
    }
);

// find fist element and update
db.collection.update(
    {
        name: "John Smith",
        hobbies: "reading",
    },
    {
        $set: {
            "hobbies.$": "anime",
        },
    }
);

// $arrayFilters oprator use for select object of array and update that value
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $set: {
            "friends.$[ele].name": "vijay",
            "friends.$[ele].age": 31,
        },
    },
    {
        arrayFilters: [
            {
                "ele.age": 28,
            },
        ],
    }
);

// $addToSet opratory use for if same value alrady exist that not add else add that value
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $addToSet: {
            friends: {
                age: 30,
                name: "David12",
            },
        },
    }
);

db.collection.update(
    {
        name: "John Smith",
    },
    {
        $addToSet: {
            hobbies: "swimming",
        },
    }
);

// $pop oparator use for remove value from array if set value is 1 than remove last value, if -1 than remove first value
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $pop: {
            hobbies: 1,
        },
    }
);

db.collection.update(
    {
        name: "John Smith",
    },
    {
        $pop: {
            friends: 1,
        },
    }
);

// $push oparator use for push value in array
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $push: {
            friends: {
                name: "dev",
            },
        },
    }
);

// $ pull oparator use for pull value
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $pull: {
            friends: {
                name: "David",
            },
            hobbies: "swimming",
        },
    }
);

// $pullAll opratort use for remove all given value
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $pullAll: {
            hobbies: ["reading", "painting"],
        },
    }
);

// $each oprator use for add multiple value push in array
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $addToSet: {
            hobbies: {
                $each: ["anime", "coding"],
            },
        },
    }
);

db.collection.update(
    {
        name: "John Smith",
    },
    {
        $addToSet: {
            friends: {
                $each: [
                    {
                        name: "Emily1",
                        age: 28,
                    },
                    "coding",
                ],
            },
        },
    }
);

// $position oprator use for add value in array particular position, this not work in $addToSet opratory
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $push: {
            friends: {
                $each: [
                    {
                        name: "Emily1",
                        age: 28,
                    },
                ],
                $position: 0,
            },
        },
    }
);

// $slice oprator  use for limit update array
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $push: {
            friends: {
                $each: [
                    {
                        name: "Emily1",
                        age: 28,
                    },
                    {
                        name: "Emily2",
                        age: 28,
                    },
                    {
                        name: "Emily3",
                        age: 28,
                    },
                ],
                $position: 0,
                $slice: 3,
            },
        },
    }
);

// "$sort" oprator usr for sort array value but $posiion position oprator not work
db.collection.update(
    {
        name: "John Smith",
    },
    {
        $push: {
            friends: {
                $each: [
                    {
                        name: "Emily1",
                        age: 31,
                    },
                ],
                $position: 0,
                $slice: 3,
                $sort: {
                    age: 1,
                },
            },
        },
    }
);
