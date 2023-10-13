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

