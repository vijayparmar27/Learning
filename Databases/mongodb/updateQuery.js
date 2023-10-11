/**
 * mongodb update query
 */

db.collection.update({
    name: "John Smith"
},
    {
        $set: {
            age: 31
        }
    });

// also use for add new keys
db.collection.update({
    name: "John Smith"
},
    {
        $set: {
            age: 31,
            dev: "node"
        }
    });

// $currentDate oprator use for add timestamps and date
// Sets the value of a field to current date, either as a Date or a Timestamp.
db.collection.update({
    name: "John Smith"
},
    {
        "$currentDate": {
            lastModified: true,
            date: {
                $type: "timestamp"
            }
        }
    })

// this query add new object and key 
db.collection.update({
    name: "John Smith"
},
    {
        "$currentDate": {
            lastModified: true,
            "joinData.date": {
                $type: "date"
            }
        },
        "$set": {
            "joinData.reason": "i want join..."
        }
    });

// $inc is incress or decress value as given
// Increments the value of the field by the specified amount.
db.collection.update({
    name: "John Smith"
},
    {
        $inc: {
            age: 5
        }
    })

// this only use on object not array inside object
db.collection.update({
    name: "John Smith"
},
    {
        $inc: {
            "age": -5,
            "address.homeNo": 1
        }
    });

// $min oprator use for if age=51 than set 30 else age = 55 than not change
// Only updates the field if the specified value is less than the existing field value.
db.collection.update({
    name: "John Smith"
},
    {
        $min: {
            "age": 30
        }
    })

// $max opartor use for if age = 30 than set age = 50 else age = 55 than not change
// Only updates the field if the specified value is greater than the existing field value.
db.collection.update({
    name: "John Smith"
},
    {
        $max: {
            "age": 50
        }
    });

// $mul oprator multiple value and update value like (old value * 2)
// Multiplies the value of the field by the specified amount.
db.collection.update({
    name: "John Smith"
},
    {
        "$mul": {
            "age": 2
        }
    });

// $rename oprator use for rename field name also work only object not array inside object
// Renames a field.s
db.collection.update({
    name: "John Smith"
},
    {
        "$rename": {
            "age": "oldAge",
            "address.homeNo": "address.houseNo"
        }
    });

// $unset oparator remove field , work on object not array inside object
db.collection.update({
    name: "John Smith"
},
    {
        "$unset": {
            "age": "",
            "address.city": ""
        }
    });

/**
 * Array update query
 */

// find fist element and update
db.collection.update({
    name: "John Smith",
    "friends.age": 28
},
    {
        "$set": {
            "friends.$.name": "vijay"
        }
    })

// all replace anime in array
db.collection.update({
    name: "John Smith"
},
    {
        "$set": {
            "friends.$[].name": "vijay"
        }
    })

// all replace anime in array
db.collection.update({
    name: "John Smith"
},
    {
        "$set": {
            "hobbies.$[]": "anime"
        }
    });

// find fist element and update
db.collection.update({
    name: "John Smith",
    "hobbies": "reading"
},
    {
        "$set": {
            "hobbies.$": "anime"
        }
    })