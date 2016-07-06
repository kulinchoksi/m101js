db.companies.aggregate([
    { $match: { "relationships.person.permalink": "eric-di-benedetto"} },
    { $project: { relationships: 1, name:1, _id: 0 } },
    { $unwind: "$relationships" },
    { $match: { "relationships.person.permalink": "eric-di-benedetto" } },
    { $group: {
        _id: {"company": "$name"},
        count: { $sum: 1 }
    } },
    { $group: { _id: null, count: { $sum: 1 }}}


db.companies.aggregate([
    { $match: { "relationships.person.permalink": "eric-di-benedetto"} },
    { $project: { relationships: 1, name:1, _id: 0 } },
    { $unwind: "$relationships" },
    { $match: { "relationships.person.permalink": "eric-di-benedetto" } },
    { $group: {
        _id: {"company": "$name"},
        { $addToSet: "$name" },
        count: { $sum: 1 }
    } }
]);