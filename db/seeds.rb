
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



u1 = User.create(
 first_name: "chris",
 last_name: "fo",
 email:"chris123@gmail.com",
 user_name: "chrisf",
 password: "passwordchris"
)

u2 = User.create(
 first_name: "christina",
 last_name: "beauregard",
 email:"christina123@gmail.com",
 user_name: "christinab",
 password: "passwordchristina"
)

u3 = User.create(
 first_name: "Alan",
 last_name: "lee",
 email:"alan123@gmail.com",
 user_name: "alanl",
 password: "passwordalan"
)

u4 = User.create(
 first_name: "James",
 last_name: "Lee",
 email:"james123@gmail.com",
 user_name: "jamesl",
 password: "passwordjames"
)
Program.create(
  title:"Orange Is the New Black",
  year:"2013-",
  rated:"TV-MA",
  run_time:"59 min",
  genre: "Comedy, Crime, Drama",
  actor: "Taylor Schilling, Uzo Aduba, Danielle Brooks, Selenis Leyva",
  plot: "Convicted of a decade old crime of transporting drug money to an ex-girlfriend, normally law abiding Piper Chapman is sentenced to a year and a half behind bars to face the reality of how life changing prison can really be.",
  award: "Nominated for 6 Golden Globes. Another 46 wins & 118 nominations.",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1OTcwNjg2Nl5BMl5BanBnXkFtZTgwOTk0NTk0MjI@._V1_SX300.jpg",
  imdb_rating: "8.2",
  imdb_id: "tt2372162",
  total_seasons: "7",
  user: u1,
)

Program.create(
  title:"Stranger Things",
  year:"2016-",
  rated:"TV-14",
  run_time:"51 min",
  genre: "Drama, Fantasy, Horror",
  actor: "Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown",
  plot: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",
  award: "Nominated for 2 Golden Globes. Another 23 wins & 93 nominations.",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjUwMDgzOTg3Nl5BMl5BanBnXkFtZTgwNTI4MDk5MzI@._V1_SX300.jpg",
  imdb_rating: "9.0",
  imdb_id: "tt4574334",
  total_seasons: "3",
  user: u1,
)

Program.create(
  title:"Rick and Morty",
  year:"2013-",
  rated:"TV-14",
  run_time:"23 min",
  genre: "Animation, Adventure, Comedy",
  actor: "Chris Parnell, Spencer Grammer, Sarah Chalke, Justin Roiland",
  plot: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
  award: "4 wins & 7 nominations.",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjRiNDRhNGUtMzRkZi00MThlLTg0ZDMtNjc5YzFjYmFjMmM4XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
  imdb_rating: "9.3",
  imdb_id: "tt2861424",
  total_seasons: "3",
  user: u2,
)

Program.create(
  title: "Black Mirror",
  year: "2011-",
  rated: "TV-MA",
  run_time: "60 min",
  genre: "Drama, Sci-Fi, Thriller",
  actor: "annah John-Kamen, Michaela Coel, Beatrice Robertson-Jones, Daniel Westwood",
  plot: "A television anthology series that shows the dark side of life and technology.",
  award: "Won 2 Primetime Emmys. Another 6 wins & 28 nominations.",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDRmOTZlOTEtNDdkMS00Yjg4LWJlYjgtZjA2NzkwZjMyNTk2XkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SX300.jpg",
  imdb_rating: "8.9",
  imdb_id: "tt2085059",
  total_seasons: "4",
  user: u2,
)

Program.create(
  title:"Game of Throne",
  year:"2011-",
  rated:"TV-MA",
  run_time:"57 min",
  genre: "Adventure, Drama, Fantasy",
  actor: "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
  plot: "Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.",
  award: "Won 1 Golden Globe. Another 252 wins & 427 nominations.",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_SX300.jpg",
  imdb_rating: "9.5/10",
  imdb_id: "tt0944947",
  total_seasons: "8",
  user: u1,
)

Program.create(
  title:"House of Cards",
  year:"2013-",
  rated:"TV-MA",
  run_time:"51 min",
  genre: "Drama",
  actor: "Robin Wright, Kevin Spacey, Michael Kelly, Derek Cecil",
  plot: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
  award: "Won 2 Golden Globes. Another 27 wins & 195 nominations.",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg",
  imdb_rating: "8.9/10",
  imdb_id: "tt1856010",
  total_seasons: "5",
  user: u2,
)

Program.create(
  title:"Cosmos: A Spacetime Odyssey",
  year:"2014",
  rated:"TV-PG",
  run_time:"557 min",
  genre: "Documentary",
  actor: "Neil deGrasse Tyson",
  plot: "A documentary series that explores how we discovered the laws of nature and found our coordinates in space and time.",
  award: "Won 4 Primetime Emmys. Another 12 wins & 22 nominations.",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5NzgwNDE3N15BMl5BanBnXkFtZTgwNDAxMTY5MTE@._V1._CR51,41,938,1336_SY132_CR2,0,89,132_AL_.jpg_V1_SX300.jpg",
  imdb_rating: "9.3/10",
  imdb_id: "tt2395695",
  total_seasons: "1",
  user: u2,
)

Program.create(
  title:"It's Always Sunny in Philadelphia",
  year:"2005-",
  rated:"TV-MA",
  run_time:"22 min",
  genre: "Comedy",
  actor: "Charlie Day, Glenn Howerton, Rob McElhenney, Kaitlin Olson",
  plot: "Five friends with big egos and slightly arrogant attitudes are the proprietors of an Irish bar in Philadelphia.",
  award: "Nominated for 3 Primetime Emmys. Another 3 wins & 8 nominations.",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5NzgwNDE3N15BMl5BanBnXkFtZTgwNDAxMTY5MTE@._V1._CR51,41,938,1336_SY132_CR2,0,89,132_AL_.jpg_V1_SX300.jpg",
  imdb_rating: "8.8/10",
  imdb_id: "tt0472954",
  total_seasons: "14",
  user: u3,
)

Program.create(
  title:"Narcos",
  year:"2015-",
  rated:"TV-MA",
  run_time:"48 min",
  genre: "Biography, Crime, Drama",
  actor: "Pedro Pascal, Wagner Moura, Boyd Holbrook, Alberto Ammann",
  plot: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
  award: "Nominated for 2 Golden Globes. Another 4 wins & 16 nominations.",
  poster_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
  imdb_rating: "8.9/10",
  imdb_id: "tt2707408",
  total_seasons: "4",
  user: u3,
)

Review.create(
    program_id: 1,
    user_id: 1,
    headline: "Really Stupid",
    body: "I did not like this show as much as I thought I would.",
    rating: 0,
)

Review.create(
    program_id: 1,
    user_id: 2,
    headline: "Just OK",
    body: "Didn't hate it",
    rating: 3,
)

Review.create(
    program_id: 1,
    user_id: 3,
    headline: "It was dope",
    body: "Super duper fun show",
    rating: 5,
)

Review.create(
    program_id: 2,
    user_id: 1,
    headline: "Really Dumb",
    body: "Practically unwatchable garbage pail nonsense",
    rating: 0,
)

Review.create(
    program_id: 2,
    user_id: 2,
    headline: "bomb diggity",
    body: "So much better than the other one.",
    rating: 5,
)

Review.create(
    program_id: 3,
    user_id: 1,
    headline: "Really Stupid",
    body: "I did not like this show as much as I thought I would.",
    rating: 0,
)

Review.create(
    program_id: 1,
    user_id: 2,
    headline: "Just OK",
    body: "Didn't hate it",
    rating: 3,
)

Review.create(
    program_id: 1,
    user_id: 3,
    headline: "It was dope",
    body: "Super duper fun show",
    rating: 5,
)

Review.create(
    program_id: 2,
    user_id: 1,
    headline: "Really Dumb",
    body: "Practically unwatchable garbage pail nonsense",
    rating: 0,
)

Review.create(
    program_id: 2,
    user_id: 2,
    headline: "bomb diggity",
    body: "So much better than the other one.",
    rating: 5,
)

Review.create(
    program_id: 3,
    user_id: 1,
    headline: "Really Stupid",
    body: "I did not like this show as much as I thought I would.",
    rating: 0,
)
