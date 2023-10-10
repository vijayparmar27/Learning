
- show databases

- use <db_name> 
    - already exist than use that is not that create mongodb for as
    
- db.user.findOne({age: 28})

- db.user.find({hobbies: "photography"}).count()

- db.user.find({"address.state": "TX"})

- db.user.find({age:{$lt:30}})

- db.user.find({age:{$lte:31}, "address.state":"TX"})

- db.user.find({age:{$lt:31}, age:{$gte:31}}) 

    - this condition will return age:{$gte:31} beacuase json object only allows same name only one key

- 