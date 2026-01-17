'use client'

import { useEffect } from 'react'
import { FocusTrap } from 'focus-trap-react'

import MovieImage from './ArtworkImage'

const Modal= ({
  id,
  title,
  releaseDate,
  credit,
  poster,
  description,
  closeModal
}) => {
  useEffect(() => {
    const html = document.documentElement
    html.classList.add('overflow-hidden')

    return () => {
      html.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <div className='flex justify-center fixed left-0 top-0 right-0 bottom-0 content-center flex-wrap padding-6 z-51 bg-black/60'>
      <div className='relative margin-auto rounded-md bg-zinc-900 w-md h-96'>
        <FocusTrap>
          <div
            role='dialog'
            aria-modal='true'
            aria-labelledby='dialog-title'
            aria-describedby='dialog-desc'
            className='m-8 mr-12'
          >
            <div className='flex'>
              <div className='flex flex-row'>
              <div className='flex min-w-[200px] height-100%'>
                <MovieImage poster={poster} title={title} />
              </div>
              <div>
                <h3 id='dialog-title' className='mb-4 text-xl font-bold text-white'>
                  {title}
                  <span className='ml-2'>({releaseDate})</span>
                </h3>
                {description && (
                  <p
                    id='dialog-desc'
                    className='text-white'  
                  >
                    {description}
                  </p>
                )}
              </div>
              </div>
              <button
                className='
                  absolute right-[10px] top-[10px]
                  w-[45px] h-[45px] p-[10px]
                  rounded-full border-0
                  bg-eerie-black hover:bg-black
                  cursor-pointer
                  before:content-[&quot;&quot;]
                  before:absolute before:left-[20px] before:top-[7px]
                  before:h-[29px] before:w-[4px]
                  before:bg-white before:rotate-45
                  after:content-[&quot;&quot;]
                  after:absolute after:left-[20px] after:top-[7px]
                  after:h-[29px] after:w-[4px]
                  after:bg-white after:-rotate-45
                '
                onClick={() => closeModal()}
                aria-label={`Close ${title} modal`}
              >X</button>
            </div>
          </div>
        </FocusTrap>
      </div>
    </div>
  )
}

export default Modal
