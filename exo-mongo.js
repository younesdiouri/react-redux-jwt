//1)
db.Sakila_films.find(
     {
        "Actors.First name": "ED",
        "Actors.Last name": "CHASE" 
    } 
)


//2)
db.Sakila_films.find( 
    {
        Description: {$regex : ".*Documentary.*"},
        Category: "Horror"
    } 
)

//3)
db.Sakila_films.count(
    {
        Rating: "G"
    }
)

//4
db.video_movieDetails.find(
    {
        $or: [ { year: 2013 }, { year: 2012 } ],
        runtime: { $gt:  60, $lt: 150}
    }
)

//5
db.video_movieDetails.find(
    {
       "tomato.image": /certified/,
   },
   {
       "tomato.image": 1
   }
)

//6
db.video_movieDetails.aggregate(
    [
        {
            $group: {
                _id: "$rated", 
                total : {
                    $sum: 1
                }
            }
        }
    ]
)