## Db exercices:
1) `db.Sakila_films.find({"Actors.First name": "ED","Actors.Last name": "CHASE"}).pretty()`
2) `db.Sakila_films.find({Description: /Documentary/i, Category: "Horror"}).pretty()`
3) `db.Sakila_films.find({Rating: "G"}).count()`
4) `db.video_movieDetails.find({runtime: {$gt: 60, $lt: 150}, $or: [{year: 2012}, {year: 2013}]}).pretty()`
5) `db.video_movieDetails.find({"tomato.image": "certified"}).pretty()`
6) `db.video_movieDetails.aggregate([{ $group: {_id: "$rated", total: {$sum: 1}}}])`

## Commandes:
    docker-compose exec mongo mongorestore -u root -p password

## Api reminder (Success / Error): 
- Get : 200 / 404
- Post (create): 201 / 400
- Put (update): 200 / 400
- Delete: 204 / 404 

Code HTTP (authentification) : 403 (authorization denied) 

Code Cache : 306 (la donnée n'a pas été mise à jour)

Http verbose advanced : option, head

## Routes and insert :

Example POST User (/users/new): 
    {
        "username" : "johndoe",
        "firstname" : "john",
        "lastname" : "doe"
    }
