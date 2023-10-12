/**
 * Aggregation in mongodb
 */

// $match working like find
db.collection.aggregate({
    "$match": {
        grade: "A"
    }
});

db.collection.aggregate({
    "$match": {
        hobbies: {
            $all: [
                "Soccer"
            ]
        },
        "grade": "A",
        "age": {
            $gt: 20
        }
    }
});

// $group for grouping results
db.collection.aggregate({
    "$group": {
        _id: "$age",
        names: {
            $push: "$name"
        }
    }
});

db.collection.aggregate({
    "$group": {
        _id: "$age",
        info: {
            $push: {
                name: "$name",
                grade: "$grade"
            }
        }
    }
});

// for all details in new groups
db.collection.aggregate([
    {
        $group: {
            _id: "$age",
            info: {
                $push: "$$ROOT"
            }
        }
    }
]);

db.collection.aggregate([
    {
        $match: {
            grade: "A"
        }
    },
    {
        $group: {
            _id: "$age",
            listOfHobbies: {
                $push: "$hobbies"
            }
        }
    }
])

// $sum of oprator age group of find data by 1 
db.collection.aggregate([
    {
        $match: {
            grade: "A"
        }
    },
    {
        $group: {
            _id: "$age",
            details: {
                $push: "$name"
            },
            sumOfStudent: {
                $sum: 1
            }
        }
    }
]);

// $sort oprator use for sorting by given key and value 1 or -1
db.collection.aggregate([
    {
        $match: {
            grade: "A"
        }
    },
    {
        $group: {
            _id: "$age",
            details: {
                $push: "$name"
            },
            sumOfStudent: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            sumOfStudent: 1
        }
    }
]);

db.collection.aggregate([
    {
        $match: {
            grade: "A"
        }
    },
    {
        $group: {
            _id: "$age",
            details: {
                $push: {
                    name: "$name",
                    age: "$age"
                }
            },
            sumOfStudent: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            "details.age": -1
        }
    }
]);

//  $max oprator use for max value in that given key
db.collection.aggregate([
    {
        $match: {
            grade: "A"
        }
    },
    {
        $group: {
            _id: "$age",
            details: {
                $push: {
                    name: "$name",
                    age: "$age"
                }
            },
            sumOfStudent: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            "details.age": -1
        }
    },
    {
        $group: {
            _id: null,
            maxStudentInAge: {
                $max: "$sumOfStudent"
            }
        }
    }
]);

db.collection.aggregate([
    {
        $match: {
            grade: "A"
        }
    },
    {
        $group: {
            _id: "$age",
            details: {
                $push: {
                    name: "$name",
                    age: "$age"
                }
            },
            sumOfStudent: {
                $sum: 1
            },
            sumOfAge: {
                $sum: "$age"
            }
        }
    }
]);

db.collection.aggregate([
    {
        $match: {
            grade: "A"
        }
    },
    {
        $group: {
            _id: "$age",
            details: {
                $push: {
                    name: "$name",
                    age: "$age"
                }
            },
            sumOfStudent: {
                $sum: 1
            },
            sumOfAge: {
                $sum: {
                    "$toDouble": "$age"
                }
            }
        }
    }
]);

db.collection.aggregate([
    {
        $match: {
            grade: "A"
        }
    },
    {
        $group: {
            _id: "$age",
            details: {
                $push: "$hobbies"
            }
        }
    }
])

// $unwind oprator use for if in array n number of value than n number of collection created 
db.collection.aggregate([
    {
        $unwind: "$hobbies"
    },
    {
        $group: {
            _id: "$age",
            hobbies: {
                $push: "$hobbies"
            }
        }
    }
])

db.collection.aggregate([
    {
        $unwind: "$hobbies"
    },
    {
        $group: {
            _id: "$age",
            hobbies: {
                $addToSet: "$hobbies"
            }
        }
    }
])

db.collection.aggregate([
    {
        $unwind: "$hobbies"
    },
    {
        $group: {
            _id: "$age",
            hobbies: {
                $addToSet: "$hobbies"
            },
            sumOfHobbies: {
                $sum: 1
            }
        }
    }
])