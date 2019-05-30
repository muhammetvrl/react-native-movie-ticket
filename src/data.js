import moment from 'moment';

// Hardcode days for the sake of simplicity
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];
// Same for times
const times = [ '9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM' ];

export const movies = [
  {
    title: 'La La Land',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/41-DDcNrazL.jpg',
    genre: 'Drama/Romance',
    days,
    times,
  },
  {
    title: 'Paterson',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTUzODA4Nzk0OF5BMl5BanBnXkFtZTgwNzE1MDIwMDI@._V1_.jpg',
    genre: 'Drama/Comedy',
    days,
    times,
  },
  {
    title: 'Jackie',
    poster: 'https://m.media-amazon.com/images/M/MV5BMzg4MjYzNjk5N15BMl5BanBnXkFtZTgwODgwODI3MDI@._V1_.jpg',
    genre: 'Drama/Biography',
    days,
    times,
  },
  {
    title: 'Lo and Behold Reveries of the Connected World',
    poster: 'https://m.media-amazon.com/images/M/MV5BNzg1NTQ0MjYwNl5BMl5BanBnXkFtZTgwMjk1NjYwOTE@._V1_.jpg',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: '10 Cloverfield Lane',
    poster: 'http://images6.fanpop.com/image/photos/40000000/10-Cloverfield-Lane-Poster-movie-trailers-40045728-378-503.jpg',
    genre: 'Drama',
    days,
    times,
  },
  {
    title: 'Birth of a Nation',
    poster: 'data:image/jpeg;base64,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',
    genre: 'Fantasy/Myster',
    days,
    times,
  },
  {
    title: 'De Palma',
    poster: 'data:image/jpeg;base64,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',
    genre: 'Documentary',
    days,
    times,
  },
  {
    title: 'Doctor Strange',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51TlojgQWuL.jpg',
    genre: 'Fantasy/Science Fiction',
    days,
    times,
  },
  {
    title: 'Avengers Infınıty War',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SY679_.jpg',
    genre: 'Fantasy/Science Fiction',
    days,
    times,
  },
];