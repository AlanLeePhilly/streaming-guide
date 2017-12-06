# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# chris = User.create(first_name: "chris",last_name: "fo", email:"chris1234@gmail.com", user_name: "chrisf", password: "passwordchris")
# christina = User.create(first_name: "christina",last_name: "bea",email:"bcbc1234@yahoo.com", user_name: "bcbc234", password: "passwordbcbc")



# bobby = Program.create(
#   title:"Bob's Burgers",
#   year:"2005",
#   rated:"TV-MA",
#   run_time:"23 m",
#   genre: "horror",
#   actor: "bob, burger",
#   plot: "Bob's got burgers to make",
#   award: "18 emmys",
#   poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg",
#   imdb_rating: "10.0",
#   imdb_id: "tt3896198",
#   total_seasons: "2",
#   user_id: "1",
# )
#
# coffee = Program.create(
#   title:"James' Coffee Grounds",
#   year:"1970",
#   rated:"TV-MA",
#   run_time:"50 m",
#   genre: "horror",
#   actor: "james, tim",
#   plot: "How to get grounds in your cup everytime",
#   award: "1 emmy",
#   poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4NzEyNzQ5OF5BMl5BanBnXkFtZTYwNTY3NDg4._V1._CR24,0,293,443_SX89_AL_.jpg_V1_SX300.jpg",
#   imdb_rating: "1.0",
#   imdb_id: "tt0108778",
#   total_seasons: "1",
#   user_id: "2",
# )

sucks = Review.create(
    program_id: 1,
    user_id: 1,
    headline: "Really Stupid",
    body: "I did not like this show as much as I thought I would.",
    rating: 0,
)
