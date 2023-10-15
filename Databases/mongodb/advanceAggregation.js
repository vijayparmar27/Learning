/**
 * for advance aggregation 
 * like $lockup $project $facet $lockupPipeline $nestedLockup
 */

db.customers.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "customer_id",
            as: "ordersList",
        }
    }
]);

db.customers.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "customer_id",
            as: "ordersList",
        },
    },
    {
        $project: {
            _id: 0,
            name: 1,
            country: 1,
            userOrderList: "$ordersList",
            userOrderCount: {
                $size: "$ordersList",
            },
            firstOrder: {
                $map: {
                    input: "$ordersList",
                    as: "item",
                    in: {
                        quatity: "$$item.totalAmount",
                    },
                },
            },
        },
    },
]);

db.customers.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "customer_id",
            as: "newData",
        },
    },
    {
        $project: {
            name: 1,
            newData: 1,
            transformedData: {
                $arrayToObject: {
                    $map: {
                        input: "$newData",
                        as: "data",
                        in: {
                            k: "$$data.order_date",
                            v: "$$data.totalAmount",
                        },
                    },
                },
            },
        },
    }
])

db.customers.aggregate([
    {
        $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "customer_id",
            as: "ordersList",
        },
    },
    {
        $project: {
            _id: 0,
            name: 1,
            country: 1,
            userOrderList: "$ordersList",
            userOrderCount: {
                $size: "$ordersList",
            },
            firstOrder: {
                $map: {
                    input: "$ordersList",
                    as: "item",
                    in: {
                        quatity: "$$item.totalAmount",
                    },
                },
            },
        },
    },
]);


db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            let: {
                order_amount: "$totalAmount",
                orderItems: "$items",
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: [
                                "$_id",
                                "$$orderItems.product_id",
                            ],
                        },
                    },
                },
            ],
            as: "result",
        },
    },
])


db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            let: {
                orederItems: "$items",
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: [
                                "$_id",
                                "$$orederItems.product_id",
                            ],
                        },
                    },
                },
                {
                    $lookup: {
                        from: "reviews",
                        localField: "_id",
                        foreignField: "product_id",
                        as: "res",
                    },
                },
            ],
            as: "result",
        },
    },
]);

// this query results has same as above query
db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            let: {
                orederItems: "$items",
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: [
                                "$_id",
                                "$$orederItems.product_id",
                            ],
                        },
                    },
                },
                {
                    $lookup: {
                        from: "reviews",
                        let: {
                            id: "$_id",
                        },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $eq: ["$product_id", "$$id"],
                                    },
                                },
                            },
                        ],
                        as: "res",
                    },
                },
            ],
            as: "result",
        },
    },
]);

db.orders.aggregate([
    {
        $lookup: {
            from: "products",
            let: {
                orederItems: "$items",
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: [
                                "$_id",
                                "$$orederItems.product_id",
                            ],
                        },
                    },
                },
            ],
            as: "result",
        },
    },
    {
        $lookup: {
            from: "reviews",
            let: {
                productDetails: "$result",
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: [
                                "$product_id",
                                "$$productDetails._id",
                            ],
                        },
                    },
                },
                {
                    $group: {
                        _id: "$product_id",
                        data: {
                            $push: "$$ROOT",
                        },
                    },
                },
            ],
            as: "res",
        },
    },
]);

db.orders.aggregate([
    {
        $graphLookup:
        /**
         * from: The target collection.
         * startWith: Expression to start.
         * connectFromField: Field to connect.
         * connectToField: Field to connect to.
         * as: Name of the array field.
         * maxDepth: Optional max recursion depth.
         * depthField: Optional Name of the depth field.
         * restrictSearchWithMatch: Optional query.
         */
        {
            from: "products",
            startWith: "$items.product_id",
            connectFromField: "_id",
            connectToField: "_id",
            as: "destinations",
            // maxDepth: 5,
            depthField: "destinations1",
            // restrictSearchWithMatch: {}
        },
    },
])


