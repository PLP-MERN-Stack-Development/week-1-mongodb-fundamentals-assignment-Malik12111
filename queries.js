// Find all movies in a specific genre
db.movies.find({ genre: "Action" })

// Find movies released after a certain year
db.movies.find({ released_year: { $gt: 2010 } })

// Find movies by a specific director
db.movies.find({ director: "Ryan Coogler" })

// Update the box office of a specific movie
db.movies.updateOne({ title: "Black Panther" }, { $set: { box_office: 1400000000 } })

// Delete a movie by its title
db.movies.deleteOne({ title: "Deadpool" })
// Find all movies that are in theaters and released after 2010
db.movies.find({ in_theaters: true, released_year: { $gt: 2010 } }, { title: 1, director: 1, box_office: 1 })

// Use projection to return only the title, director, and box office fields in your queries
db.movies.find({}, { title: 1, director: 1, box_office: 1, _id: 0 })

// Sort movies by box office in ascending order
db.movies.find({}).sort({ box_office: 1 })

// Sort movies by box office in descending order
db.movies.find({}).sort({ box_office: -1 })

// Implement pagination (5 movies per page)
db.movies.find({}).limit(5).skip(0)

// Implement pagination (5 movies per page)
db.movies.find({}).limit(5).skip(5)
// Calculate the average box office of movies by genre
db.movies.aggregate([
  { $group: { _id: "$genre", avgBoxOffice: { $avg: "$box_office" } } }
])

// Find the director with the most movies in the collection    
db.movies.aggregate([
  { $group: { _id: "$director", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Implement a pipeline that groups movies by release decade and counts them
db.movies.aggregate([
  { $group: { _id: { $substr: ["$released_year", 0, 3] }, count: { $sum: 1 } } }
])
// Create an index on the `title` field for faster searches
db.movies.createIndex({ title: 1 })

// Create a compound index on `director` and `released_year`
db.movies.createIndex({ director: 1, released_year: 1 })

// Use the `explain()` method to demonstrate the performance improvement with your indexes
db.movies.explain("executionStats").find({ title: "The Dark Knight" })

