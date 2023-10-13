/**
 * write test query
 */

[{
    $group: {
        _id: null,
        avgScore: {
            $filter: {
                input: "<array>",
                as: "score",
                cond: { $gte: ["$age", 18] }
            }
        }
    }
}]

db.orders.aggregate([
    {
        $match: {
            "name": "Order_2_xyz"
        }
    },
    {
        $project: {
            "root": "$$ROOT"
        }
    },
    {
        $lookup: {
            "from": "repairs",
            "let": {
                "orderId": "$_id"
            },
            "pipeline": [
                {
                    $match: {
                        $expr: {
                            $eq: ["$order", "$$orderId"]
                        }
                    }
                }
            ],
            "as": "repairsLookup"
        }
    },
    {
        $lookup: {
            "from": "reworks",
            "let": {
                "orderId": "$_id"
            },
            "pipeline": [
                {
                    $match: {
                        $expr: {
                            $eq: ["$order", "$$orderId"]
                        }
                    }
                }
            ],
            "as": "reworksLookup"
        }
    },
    {
        $addFields: {
            "repairsLookup.order": "$root",
            "reworksLookup.order": "$root"
        }
    },
    {
        $project: {
            "merged": {
                $concatArrays: [
                    "$repairsLookup",
                    "$reworksLookup"
                ]
            }
        }
    },
    {
        $unwind: "$merged"
    },
    {
        $replaceRoot: {
            "newRoot": "$merged"
        }
    }
]).pretty()