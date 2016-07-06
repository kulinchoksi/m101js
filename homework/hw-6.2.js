db.grades.aggregate([
   {
      $project: {
         _id: 0,
         student_id: 1,
         class_id: 1,
         scores: {
            $filter: {
               input: "$scores",
               as: "scores",
               cond: { $ne: [ "$$scores.type", "quiz" ] }
            }
         },
         avgScore: {$avg: {"$scores.score"}}
      }
   }
]);

,
   { $group: {
        _id: null,
        count: { $sum: 1 }
    } }