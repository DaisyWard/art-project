// import { useState } from 'react'
// import { createPortal } from 'react-dom'

// import Modal from '@components/Modal'
import ArtworkImage from '@components/ArtworkImage'

//import { MovieProps } from '@context/Artwork.types'

const Artwork = ({
  id,
  title,
  poster,
  genres,
  description,
  releaseDate
}) => {
  //const [showOverlay, setShowOverlay] = useState(false)

  const formattedReleaseDate = releaseDate && releaseDate.split('-')[0]

//   const modal = document.createElement('div')
//   modal.setAttribute('id', 'modal')
//   modal.setAttribute('data-testid', 'modal')

  return (
    <div className='mb-8'>
      <button
        data-testid={'movie'}
        className='h-96 p-0 border-0'
        //onClick={() => setShowOverlay(!showOverlay)}
      >
        <div className='border-0 cursor-pointer'>
          <ArtworkImage title={title} poster={poster} />
        </div>
      </button>
      <div className='mt-8'>
        <p className='m-0'>{title}</p>
        <p className='m-0' data-testid='release-date'>
          {formattedReleaseDate}
        </p>
      </div>
      {/* {showOverlay &&
        createPortal(
          <Modal
            id={id}
            title={title}
            releaseDate={formattedReleaseDate}
            poster={poster}
            genres={genres}
            description={description}
            closeModal={() => setShowOverlay(false)}
          />,
          document.body.appendChild(modal)
        )} */}
    </div>
  )
}

export default Artwork
