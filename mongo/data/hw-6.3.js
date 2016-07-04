db.companies.aggregate([
   {
      $match: {
        "founded_year": 2004,
        "funding_rounds.4": {$exists: true}
      }
   },
   {
      $project: {
          _id: 0,
          name: 1,
          avgFund: {
              $avg: "$funding_rounds.raised_amount"
          }
      }
   },
   {
      $sort: { "avgFund": 1 }
    },
    {
      $limit: 1
    }
]);

// following was based on confused understanding, which was incorrect

db.companies.aggregate([
   {
      $match: {
        "founded_year": 2004,
        "funding_rounds.4": {$exists: true}
      }
   },
   {
      $project: {
          _id: 0,
          name: 1,
          "funding_rounds.round_code": 1,
          "funding_rounds.raised_amount": 1
      }
   },
   {
      $unwind: "$funding_rounds"
   },
   {
      $match: {
          "funding_rounds.raised_amount": { "$ne": null }
      }
   },
   {
      $group: {
          _id: { "company" : "$name", "funding_rounds_round_code" : "$funding_rounds.round_code" },
          avgFund: {
              $avg: "$funding_rounds.raised_amount"
          }
      }
   },
   {
      $sort: { "avgFund": 1 }
    },
    {
      $limit: 1
    }
]);


