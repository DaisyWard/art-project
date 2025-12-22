import { FC } from 'react'
import Image from 'next/image'

import fallbackPoster from '@public/fallbackPoster.png'

//import { MovieImageProps } from '@context/MovieSearch.types'

const MovieImage= ({ poster, title }) => {
//   const posterSrc =
//     poster === null
//       ? fallbackPoster
//       : `https://image.tmdb.org/t/p/original/${poster}`

  return (
    <Image
      priority={true}
      src={poster}
      alt={title}
      width='256'
      height='393'
    />
  )
}

export default MovieImage
