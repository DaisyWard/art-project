import { FC } from 'react'
import Image from 'next/image'

import fallbackPoster from '@public/fallbackPoster.png'

//import { MovieImageProps } from '@context/MovieSearch.types'

const MovieImage= ({ poster, title }) => {
//   const posterSrc =
//     poster === null
//       ? fallbackPoster
//       : `https://image.tmdb.org/t/p/original/${poster}`

console.log('poster url:', poster);

  return (
    <div style={{ position: 'relative', width: '160px', height: '240px', overflow: 'hidden' }}>
    <Image
      src={`/api/imageProxy?url=${encodeURIComponent(poster)}`}
      alt="Artwork"
      width={843}
      height={843}
    />
    </div>
  )
}

export default MovieImage
