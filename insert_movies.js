// Task 2: Basic CRUD Operations
// insert_use plp_movie_database
use plp_movie_database
db.createCollection("movies")

// Sample movie data for MongoDB movie database
db.movies.insertMany([
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        genre: "Action",
        released_year: 2008,
        box_office: 1004558444,
        in_theaters: true,
        duration: 152,
        studio: "Warner Bros."
    },
    {
        title: "Wonder Woman",
        director: "Patty Jenkins",
        genre: "Action",
        released_year: 2017,
        box_office: 821847012,
        in_theaters: true,
        duration: 141,
        studio: "Warner Bros."
    },
    {
        title: "Spider-Man: Homecoming",
        director: "Jon Watts",
        genre: "Action",
        released_year: 2017,
        box_office: 880166924,
        in_theaters: true,
        duration: 133,
        studio: "Columbia Pictures"
    },
    {
        title: "Black Panther",
        director: "Ryan Coogler",
        genre: "Action",
        released_year: 2018,
        box_office: 1346913161,
        in_theaters: true,
        duration: 134,
        studio: "Marvel Studios"
    },
    {
        title: "Aquaman",
        director: "James Wan",
        genre: "Action",
        released_year: 2018,
        box_office: 1148161807,
        in_theaters: true,
        duration: 143,
        studio: "Warner Bros."
    },
    {
        title: "Thor: Ragnarok",
        director: "Taika Waititi",
        genre: "Action",
        released_year: 2017,
        box_office: 850000000,
        in_theaters: true,
        duration: 130,
        studio: "Marvel Studios"
    },
    {
        title: "Man of Steel",
        director: "Zack Snyder",
        genre: "Action",
        released_year: 2013,
        box_office: 668045518,
        in_theaters: true,
        duration: 143,
        studio: "Warner Bros."
    },
    {
        title: "Guardians of the Galaxy",
        director: "James Gunn",
        genre: "Action",
        released_year: 2014,
        box_office: 773328629,
        in_theaters: true,
        duration: 121,
        studio: "Marvel Studios"
    },
    {
        title: "Batman v Superman: Dawn of Justice",
        director: "Zack Snyder",
        genre: "Action",
        released_year: 2016,
        box_office: 873634919,
        in_theaters: true,
        duration: 151,
        studio: "Warner Bros."
    },
    {
        title: "Deadpool",
        director: "Tim Miller",
        genre: "Action",
        released_year: 2016,
        box_office: 783112979,
        in_theaters: true,
        duration: 108,
        studio: "20th Century Fox"
    }
]);
