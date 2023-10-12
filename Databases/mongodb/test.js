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