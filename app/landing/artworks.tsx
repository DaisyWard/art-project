import { FC, useContext } from 'react'

import styles from '@styles/components/Movies.module.scss'
import Image from 'next/image'
import Artwork from '../components/Artwork'
//import { fetchArtworks } from "@utils/artworks";

//import MovieSearchContext from '@context/MovieSearch.context'
import type { GetStaticProps } from "next";
import { getArtworkImageUrl } from '@utils/getArtworkImageUrl';

export type Artwork = {
  id: number;
  title: string;
  thumbnail: {
    lqip: string;
  } | null;
  date_display: string;
  credit_line: string;
  medium_display: string;
};


const Artworks = async () => {
  //const movieSearchContext = useContext(MovieSearchContext)
  //const { currentMovieItems } = movieSearchContext

  const res = await fetch("https://api.artic.edu/api/v1/artworks", {
    next: { revalidate: 86400 },
  });

  const data = await res.json();

  const artworks = data.data;


  console.log('artworks count:', getArtworkImageUrl(artworks[0].image_id));
 

  return (
    <div data-testid={'artworks'} className='bg-gray-100 rounded-md w-full'> 
    <p className='pt-8 pl-8 pr-8'><b>{artworks?.length} artworks</b></p>
      <div className="grid grid-cols-1 gap-6 justify-items-center mx-auto p-8
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4">
        {artworks instanceof Array &&
          artworks.length > 0 &&
          artworks.map((artwork) => (
            <>
            <Artwork
              key={artwork.id}
              id={artwork.id}
              title={artwork.title}
              poster={getArtworkImageUrl(artwork.image_id!)}
              releaseDate={artwork.date_display || ''}
              credit={artwork.credit_line}
              description={artwork.medium_display || ''}
            />
            </>
          ))}
      </div>
    </div>
  )
}

export default Artworks
