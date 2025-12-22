import { FC, useContext } from 'react'

import styles from '@styles/components/Movies.module.scss'

import Artwork from '@components/Artwork'

import MovieSearchContext from '@context/MovieSearch.context'

const Artworks = () => {
  //const movieSearchContext = useContext(MovieSearchContext)
  //const { currentMovieItems } = movieSearchContext

  const currentArtworkItems = [
    {
      id: 1,
      title: 'Starry Night',
      poster_path: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
      release_date: '1889-06-18',
      genre_ids: [1, 3],
      overview: 'A swirling night sky over a small village'
    },
    {
      id: 2,
      title: 'The Persistence of Memory',
      poster_path: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
      release_date: '1931-01-01',
      genre_ids: [2, 4],
      overview: 'Melting clocks in a surreal landscape'
    },
    {
      id: 3,
      title: 'Girl with a Pearl Earring',
      poster_path: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/1665_Girl_with_a_Pearl_Earring.jpg',
      release_date: '1665-01-01',
      genre_ids: [1, 5],
      overview: 'A mysterious portrait of a girl with an exotic pearl earring'
    }
  ]

  return (
    <div data-testid={'artworks'}>
      <div className="grid grid-cols-1 gap-6 justify-items-center mx-auto p-5
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4">
        {currentArtworkItems instanceof Array &&
          currentArtworkItems.length > 0 &&
          currentArtworkItems.map((artwork) => (
            <Artwork
              key={artwork.id}
              id={artwork.id}
              title={artwork.title}
              poster={artwork.poster_path}
              releaseDate={artwork.release_date}
              genres={artwork.genre_ids}
              description={artwork.overview}
            />
          ))}
      </div>
    </div>
  )
}

export default Artworks
