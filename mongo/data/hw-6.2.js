db.grades.aggregate([
   {
      $project: {
        _id: 0,
        student_id: 1,
        class_id: 1,
         filtered_scores: {
            $filter: {
               input: "$scores",
               as: "scores",
               cond: { $ne: [ "$$scores.type", "quiz" ] }
            }
         }
      }
   },
   {
      $project: {
        student_id: 1,
        class_id: 1,
        avgScore: {
            $avg: "$filtered_scores.score"
         }
      }
   },
   { 
      $group: {
          _id: "$class_id",
          avgStudentScore: { $avg: "$avgScore" }
      }
   },
   {
      $sort: { "avgStudentScore": -1}
   },
   {
      $limit: 1
   }
]);

// won't work in following way
{
  $group: {
    _id: null,
    class_id: { $push: "$_id" },
    maxAvgStudentScore: {
        $max: "$avgStudentScore"
     }
  }
}